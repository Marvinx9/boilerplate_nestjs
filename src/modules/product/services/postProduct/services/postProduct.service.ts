import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PostProductInputDto } from '../dto/postProductInput.dto';
import { PostProductRepository } from '../repository/postProduct.repository';

@Injectable()
export class PostProductService {
  constructor(private postProductRepository: PostProductRepository) {}

  async execute(data: PostProductInputDto) {
    try {
      if (
        !(await this.postProductRepository.findEnterpriseById(
          data.enterpriseId,
        ))
      ) {
        throw new BadRequestException('enterprise not found!');
      }

      await this.postProductRepository.save(data);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.getMessage);
    }
  }
}
