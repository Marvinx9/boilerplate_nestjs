import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DeleteProductRepository } from '../repository/deleteProduct.repository';

@Injectable()
export class DeleteProductService {
  constructor(private deleteProductRepository: DeleteProductRepository) {}

  async execute(id: number) {
    try {
      if (!(await this.deleteProductRepository.findProductById(Number(id)))) {
        throw new BadRequestException('product not found!');
      }

      await this.deleteProductRepository.delete(Number(id));
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.getMessage);
    }
  }
}
