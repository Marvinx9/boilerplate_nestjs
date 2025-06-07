import { Module } from '@nestjs/common';
import { PostEnterpriseService } from './services/postEnterprise/service/postEnterprise.service';
import { PostEnterpriseaRepository } from './services/postEnterprise/repository/postEnterprise.repository';
import { EnterpriseController } from './controllers/enterprise.controller';
import { DeleteEnterpriseRepository } from './services/deleteEnterprise/repository/deleteEnterprise.repository';
import { DeleteEnterpriseService } from './services/deleteEnterprise/services/deleteEnterprise.service';
import { GetEnterpriseByIdService } from './services/getEnterpriseById/services/getEnterpriseById.service';
import { GetEnterpriseByIdRepository } from './services/getEnterpriseById/repository/getEnterpriseById.repository';
import { PutEnterpriseService } from './services/putEnterprise/services/putEnterprise.service';
import { PutEnterpriseRepository } from './services/putEnterprise/repository/putEnterprise.repository';
@Module({
  imports: [],
  controllers: [EnterpriseController],
  providers: [
    GetEnterpriseByIdService,
    GetEnterpriseByIdRepository,
    PostEnterpriseService,
    PostEnterpriseaRepository,
    PutEnterpriseService,
    PutEnterpriseRepository,
    DeleteEnterpriseService,
    DeleteEnterpriseRepository,
  ],
})
export class EnterpriseModule {}
