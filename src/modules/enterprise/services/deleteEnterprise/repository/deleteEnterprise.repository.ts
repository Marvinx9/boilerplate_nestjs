import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';

@Injectable()
export class DeleteEnterpriseRepository {
  constructor(private prismaService: PrismaService) {}

  async findEnterpriseById(id: number): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.enterprise.delete({
      where: {
        id: id,
      },
    });
  }
}
