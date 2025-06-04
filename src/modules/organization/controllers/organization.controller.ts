import { Controller, Get } from '@nestjs/common';
import { ListEstablishmentDto } from '../dto/list-establishment.dto';
import { ListEstablishmentService } from '../services/list-establishment.service';
import { OrganizationEntity } from '../entities/organization.entity';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';
import { FindOrganizationByAuthenticatedUserService } from '../services/find-organization-by-authenticated-user.service';
import { IFindByUser } from '../dto/find-by-user.dto';

@Controller('organization')
export class OrganizationController {
  constructor(
    private readonly listEstablishmentService: ListEstablishmentService,
    private readonly findOrganizationByAuthenticatedUserService: FindOrganizationByAuthenticatedUserService,
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
}
