import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { ListEstablishmentDto } from '../dto/list-establishment.dto';
import { ListEstablishmentService } from '../services/list-establishment.service';
import { OrganizationEntity } from '../entities/organization.entity';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';
import { FindOrganizationByAuthenticatedUserService } from '../services/find-organization-by-authenticated-user.service';
import { IFindByUser } from '../dto/find-by-user.dto';
import { GetBalanceOrganization } from '../services/get_balace.service';

@Controller('organization')
export class OrganizationController {
  constructor(
    private readonly listEstablishmentService: ListEstablishmentService,
    private readonly findOrganizationByAuthenticatedUserService: FindOrganizationByAuthenticatedUserService,
    private readonly getBalanceOrganizationService: GetBalanceOrganization,
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
  upsertImage(
    @UseAuthUser() user: UserEntity,
    @Body() body: { thumbnail: string },
  ): Promise<void> {
    console.log(body);
    throw new ForbiddenException('Upsert image is not implemented yet.');
  }

  @Post('/webhook-charge-listener')
  webhookChargeListener(): Promise<void> {
    throw new ForbiddenException(
      'Webhook charge listener is not implemented yet.',
    );
  }
}
