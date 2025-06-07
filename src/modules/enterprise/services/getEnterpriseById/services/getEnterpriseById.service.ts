import { Injectable } from '@nestjs/common';
import { GetEnterpriseByIdRepository } from '../repository/getEnterpriseById.repository';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';

@Injectable()
export class GetEnterpriseByIdService {
  constructor(
    private getEnterpriseByIdRepository: GetEnterpriseByIdRepository,
  ) {}

  async execute(id: number): Promise<EnterpriseEntity | null> {
    return await this.getEnterpriseByIdRepository.getEnterprise(Number(id));
  }
}
