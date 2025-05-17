import { Controller, Get } from '@nestjs/common';
import { ListEstablishmentDto } from '../dto/list-establishment.dto';
import { ListEstablishmentService } from '../services/list-establishment.service';
import { OrganizationEntity } from '../entities/organization.entity';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';

@Controller('organization')
export class OrganizationController {
  constructor(
    private readonly listEstablishmentService: ListEstablishmentService,
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
}
