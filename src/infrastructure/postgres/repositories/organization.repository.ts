import { IOrganizationRepository } from 'src/modules/organization/repositories/organization.repository';
import { PrismaService } from '../prisma/prisma.service';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  IListAll,
  OrganizationSerializer,
} from '../serializers/organization-serializer';

@Injectable()
export class OrganizationPostgresRepository implements IOrganizationRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(args: OrganizationEntity): Promise<OrganizationEntity> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<OrganizationEntity[]> {
    const data = (await this.prisma.organization.findMany({
      where: {
        is_active: true,
      },
      select: {
        uuid: true,
        social_name: true,
        image_path: true,
      },
    })) as unknown as IListAll[];

    return new OrganizationSerializer().toManyEntity(data);
  }

  findOne(args: OrganizationEntity): Promise<OrganizationEntity> {
    throw new Error('Method not implemented.');
  }

  update(args: OrganizationEntity): Promise<OrganizationEntity> {
    throw new Error('Method not implemented.');
  }

  delete(args: OrganizationEntity): Promise<OrganizationEntity> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<OrganizationEntity | null> {
    throw new Error('Method not implemented.');
  }
}
