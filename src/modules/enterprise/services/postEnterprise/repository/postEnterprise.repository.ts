import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';
import { PostEnterpriseInputDto } from '../dto/postEnterpriseInput.dto';

@Injectable()
export class PostEnterpriseaRepository {
  constructor(private prismaService: PrismaService) {}

  async findEnterpriseByCNPJ(cnpj: string): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        cnpj,
      },
    });
  }

  async save(data: PostEnterpriseInputDto): Promise<void> {
    await this.prismaService.enterprise.create({
      data,
    });
  }
}
