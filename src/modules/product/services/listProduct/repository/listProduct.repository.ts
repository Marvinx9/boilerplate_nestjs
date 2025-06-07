import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class ListProductRepository {
  constructor(private prismaService: PrismaService) {}

  async listProduct(enterpriseId: number): Promise<ProductEntity[]> {
    return await this.prismaService.product.findMany({
      where: {
        enterpriseId: enterpriseId,
      },
    });
  }
}
