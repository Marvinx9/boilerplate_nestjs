import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PutEnterpriseRepository } from '../repository/putEnterprise.repository';
import { PutEnterpriseInputDto } from '../dto/putEnterpriseInput.dto';

@Injectable()
export class PutEnterpriseService {
  constructor(private putEnterpriseRepository: PutEnterpriseRepository) {}

  async execute(id: number, data: PutEnterpriseInputDto) {
    try {
      if (
        !(await this.putEnterpriseRepository.findEnterpriseById(Number(id)))
      ) {
        throw new BadRequestException('enterprice not found!');
      }

      const verifyCnpj: boolean =
        data.cnpj != null
          ? (await this.putEnterpriseRepository.checkCnpj(data.cnpj)) == null
          : true;

      if (!verifyCnpj) {
        throw new BadRequestException('Cnpj already exists');
      }
      await this.putEnterpriseRepository.update(Number(id), data);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.message);
    }
  }
}
