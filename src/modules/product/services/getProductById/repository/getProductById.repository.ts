import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class GetProductByIdRepository {
  constructor(private prismaService: PrismaService) {}

  async getProduct(id: number): Promise<ProductEntity | null> {
    return await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }
}
