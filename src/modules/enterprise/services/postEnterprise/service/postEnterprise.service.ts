import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PostEnterpriseInputDto } from '../dto/postEnterpriseInput.dto';
import { PostEnterpriseaRepository } from '../repository/postEnterprise.repository';

@Injectable()
export class PostEnterpriseService {
  constructor(private postEnterpriseaRepository: PostEnterpriseaRepository) {}

  async execute(data: PostEnterpriseInputDto) {
    try {
      if (
        await this.postEnterpriseaRepository.findEnterpriseByCNPJ(data.cnpj)
      ) {
        throw new BadRequestException('enterprise already exists!');
      }

      await this.postEnterpriseaRepository.save(data);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.getMessage);
    }
  }
}
