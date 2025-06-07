import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';

@Injectable()
export class GetEnterpriseByIdRepository {
  constructor(private prismaService: PrismaService) {}

  async getEnterprise(id: number): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        id,
      },
    });
  }
}
