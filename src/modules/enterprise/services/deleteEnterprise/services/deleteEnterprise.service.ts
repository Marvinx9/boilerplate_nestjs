import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DeleteEnterpriseRepository } from '../repository/deleteEnterprise.repository';

@Injectable()
export class DeleteEnterpriseService {
  constructor(private deleteEnterpriseRepository: DeleteEnterpriseRepository) {}

  async execute(id: number) {
    try {
      if (
        !(await this.deleteEnterpriseRepository.findEnterpriseById(Number(id)))
      ) {
        throw new BadRequestException('enterprise not found!');
      }

      await this.deleteEnterpriseRepository.delete(Number(id));
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.getMessage);
    }
  }
}
