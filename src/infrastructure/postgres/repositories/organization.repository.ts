import { IOrganizationRepository } from 'src/modules/organization/repositories/organization.repository';
import { PrismaService } from '../prisma/prisma.service';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { Injectable } from '@nestjs/common';
import {
  IListAll,
  OrganizationSerializer,
} from '../serializers/organization-serializer';

@Injectable()
export class OrganizationPostgresRepository implements IOrganizationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: OrganizationEntity): Promise<OrganizationEntity> {
    const userId = args.getUser()?.getUuid() as string;
    const data = await this.prisma.organization.create({
      data: {
        social_name: args.getSocialName(),
        image_path: '',
        cnpj: args.getCnpj(),
        email: args.getEmail(),
        fantasy_name: args.getSocialName(),
        office: args.getOffice(),
        user: {
          connect: {
            uuid: userId,
          },
        },
        phone: args.getPhone(),
      },
    });

    return new OrganizationSerializer().toEntity(data);
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
    throw new Error(`Method not implemented. ${args.getUuid()}`);
  }

  update(args: OrganizationEntity): Promise<OrganizationEntity> {
    throw new Error(`Method not implemented. ${args.getUuid()}`);
  }

  delete(args: OrganizationEntity): Promise<OrganizationEntity> {
    throw new Error(`Method not implemented. ${args.getUuid()}`);
  }

  findByEmail(email: string): Promise<OrganizationEntity | null> {
    throw new Error(`Method not implemented. ${email}`);
  }
}
