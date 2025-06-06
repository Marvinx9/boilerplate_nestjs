import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { PostProductInputDto } from '../dto/postProductInput.dto';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';

@Injectable()
export class PostProductRepository {
  constructor(private prismaService: PrismaService) {}

  async findEnterpriseById(id: number): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        id,
      },
    });
  }

  async save(data: PostProductInputDto): Promise<void> {
    const { enterpriseId, ...rest } = data;
    await this.prismaService.product.create({
      data: {
        ...rest,
        enterprise: {
          connect: { id: enterpriseId },
        },
      },
    });
  }
}
