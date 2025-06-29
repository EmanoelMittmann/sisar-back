import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';
import { BaseService } from 'src/shared/contracts';

/* eslint-disable */

@Injectable()
export class SaveImgOrganizationService
  implements
    BaseService<{ file: Express.Multer.File; organizationUuid: string }, void>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute({ file, organizationUuid }): Promise<void> {
    if (!organizationUuid) {
      throw new Error('Organization UUID is required');
    }
    if (!file) {
      throw new Error('File is required');
    }

    const bytes = file.buffer.toString('base64') as string;

    const base64 = `data:${file.mimetype};base64,${bytes}`;

    console.log(base64);

    await this.prisma.organization.update({
      where: {
        uuid: organizationUuid,
      },
      data: {
        image_path: base64,
      },
    });

    // await this.prisma.organization.update({
    //   where: {
    //     uuid: organizationUuid,
    //   },
    //   data: {
    //     image_path: file.,
    //   },
    // });
  }
}
