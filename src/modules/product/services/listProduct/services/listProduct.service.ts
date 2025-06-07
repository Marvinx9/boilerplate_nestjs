import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { ListProductRepository } from '../repository/listProduct.repository';
import { ListProductInputDto } from '../dto/listProductInput.dto';

@Injectable()
export class ListProductService {
  constructor(private listProductRepository: ListProductRepository) {}

  async execute(data: ListProductInputDto): Promise<{
    page: number;
    size: number;
    total: number;
    data: ProductEntity[];
  }> {
    try {
      console.log('-=-=-=-=----------==================-', data);
      const result = await this.listProductRepository.listProduct(
        Number(data.enterpriseId),
      );

      console.log(result);

      const start = (data.page - 1) * data.size;
      const end = start + data.size;
      const paginatedData = result.slice(start, end);

      return {
        page: data.page,
        size: data.size,
        total: result.length,
        data: paginatedData,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
