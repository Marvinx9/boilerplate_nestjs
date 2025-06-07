import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PutProductRepository } from '../repository/putProduct.repository';
import { PutProductInputDto } from '../dto/putProductInput.dto';

@Injectable()
export class PutProductService {
  constructor(private putProductRepository: PutProductRepository) {}

  async execute(id: number, data: PutProductInputDto) {
    try {
      if (!(await this.putProductRepository.findProductById(Number(id)))) {
        throw new BadRequestException('product not found!');
      }

      await this.putProductRepository.update(Number(id), data);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.getMessage);
    }
  }
}
