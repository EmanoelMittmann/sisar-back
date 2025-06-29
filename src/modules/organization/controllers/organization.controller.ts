import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ListEstablishmentDto } from '../dto/list-establishment.dto';
import { ListEstablishmentService } from '../services/list-establishment.service';
import { OrganizationEntity } from '../entities/organization.entity';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';
import { FindOrganizationByAuthenticatedUserService } from '../services/find-organization-by-authenticated-user.service';
import { IFindByUser } from '../dto/find-by-user.dto';
import { GetBalanceOrganization } from '../services/get_balace.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { SaveImgOrganizationService } from '../services/save-img-organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(
    private readonly listEstablishmentService: ListEstablishmentService,
    private readonly findOrganizationByAuthenticatedUserService: FindOrganizationByAuthenticatedUserService,
    private readonly getBalanceOrganizationService: GetBalanceOrganization,
    private readonly saveImgOrganizationService: SaveImgOrganizationService,
  ) {}

  @Get('/list-establishment')
  async list_establishment(
    @UseAuthUser() user: UserEntity,
  ): Promise<ListEstablishmentDto[]> {
    const organization = new OrganizationEntity();
    const userEntity = new UserEntity();
    userEntity.setId(user.getId());
    organization.setUser(userEntity);
    return this.listEstablishmentService.execute(organization);
  }

  @Get('/me')
  async findCompanyByAuthenticatedUser(
    @UseAuthUser() user: UserEntity,
  ): Promise<IFindByUser> {
    return this.findOrganizationByAuthenticatedUserService.execute(
      user.getUuid(),
    );
  }

  @Get('/balance')
  async getBalanceByOrganization(
    @UseAuthUser() user: UserEntity,
  ): Promise<number> {
    const organization = user.getOrganization();

    if (!organization) {
      throw new ForbiddenException(
        'Você não tem permissão para acessar esta informação.',
      );
    }

    return this.getBalanceOrganizationService.execute(organization.getUuid());
  }

  @Put('/upsert-image')
  @UseInterceptors(FileInterceptor('file'))
  async upsertImage(
    @UseAuthUser() user: UserEntity,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    const org = user.getOrganization();
    if (!org) {
      throw new ForbiddenException(
        'Você não tem permissão para atualizar a imagem da organização.',
      );
    }

    await this.saveImgOrganizationService.execute({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file: file,
      organizationUuid: user.getOrganization()?.getUuid(),
    });
  }

  @Post('/webhook-charge-listener')
  webhookChargeListener(): Promise<void> {
    throw new ForbiddenException(
      'Webhook charge listener is not implemented yet.',
    );
  }
}
