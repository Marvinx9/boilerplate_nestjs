import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class DeleteProductRepository {
  constructor(private prismaService: PrismaService) {}

  async findProductById(id: number): Promise<ProductEntity | null> {
    return await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.product.delete({
      where: {
        id: id,
      },
    });
  }
}
