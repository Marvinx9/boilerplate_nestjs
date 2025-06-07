import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { PutProductInputDto } from '../dto/putProductInput.dto';

@Injectable()
export class PutProductRepository {
  constructor(private prismaService: PrismaService) {}

  async findProductById(id: number): Promise<ProductEntity | null> {
    return await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: PutProductInputDto): Promise<void> {
    await this.prismaService.product.update({
      where: {
        id: id,
      },
      data,
    });
  }
}
