import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { IOrganizationRepository } from 'src/modules/organization/repositories/organization.repository';
import { BaseService } from 'src/shared/contracts';

@Injectable()
export class SignUpCompanyService
  implements BaseService<OrganizationEntity, void>
{
  private logger = new Logger(SignUpCompanyService.name.toUpperCase());
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
  ) {}

  async execute(organization: OrganizationEntity): Promise<void> {
    try {
      await this.organizationRepository.create(organization);
    } catch (error) {
      this.logger.error(`Error creating organization: ${error}`);
      throw new InternalServerErrorException({
        message: 'Error creating organization',
      });
    }
  }
}
