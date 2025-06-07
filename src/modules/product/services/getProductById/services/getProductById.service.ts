import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { GetProductByIdRepository } from '../repository/getProductById.repository';

@Injectable()
export class GetProductByIdService {
  constructor(private getProductByIdRepository: GetProductByIdRepository) {}

  async execute(id: number): Promise<ProductEntity | null> {
    return await this.getProductByIdRepository.getProduct(Number(id));
  }
}
