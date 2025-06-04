import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { IOrganizationRepository } from '../repositories/organization.repository';
import { OrganizationSerializer } from '../serializers/organization.serializer';
import { IFindByUser } from '../dto/find-by-user.dto';

@Injectable()
export class FindOrganizationByAuthenticatedUserService
  implements BaseService<string, IFindByUser>
{
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
  ) {}

  async execute(userId: string): Promise<IFindByUser> {
    const organization = await this.organizationRepository.findByUserId(userId);

    if (!organization) {
      throw new NotFoundException({
        message: 'Organization not found for the authenticated user',
      });
    }

    return new OrganizationSerializer().toOrganizationByUser(organization);
  }
}
