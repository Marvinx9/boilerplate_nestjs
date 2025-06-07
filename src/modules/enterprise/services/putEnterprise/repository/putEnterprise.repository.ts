import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { PutEnterpriseInputDto } from '../dto/putEnterpriseInput.dto';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';

@Injectable()
export class PutEnterpriseRepository {
  constructor(private prismaService: PrismaService) {}

  async findEnterpriseById(id: number): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        id,
      },
    });
  }

  async checkCnpj(cnpj: string): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        cnpj: cnpj,
      },
    });
  }

  async update(id: number, data: PutEnterpriseInputDto): Promise<void> {
    await this.prismaService.enterprise.update({
      where: {
        id: id,
      },
      data,
    });
  }
}
