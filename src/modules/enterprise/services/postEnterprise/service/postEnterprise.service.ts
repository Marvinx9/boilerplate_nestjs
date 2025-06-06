import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PostEnterpriseInputDto } from '../dto/postEnterpriseInput.dto';
import { EnterprisePrismaRepository } from '../repository/enterprise.prisma.repository';

@Injectable()
export class PostEnterpriseService {
  constructor(private enterprisePrismaRepository: EnterprisePrismaRepository) {}

  async execute(data: PostEnterpriseInputDto) {
    try {
      if (
        await this.enterprisePrismaRepository.findEnterpriseByCNPJ(data.cnpj)
      ) {
        throw new BadRequestException('enterprise already exists!');
      }

      await this.enterprisePrismaRepository.save(data);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.getMessage);
    }
  }
}
