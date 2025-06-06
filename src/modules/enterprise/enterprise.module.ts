import { Module } from '@nestjs/common';
import { PostEnterpriseService } from './services/postEnterprise/service/postEnterprise.service';
import { EnterprisePrismaRepository } from './services/postEnterprise/repository/enterprise.prisma.repository';
import { EnterpriseController } from './controllers/enterprise.controller';
@Module({
  imports: [],
  controllers: [EnterpriseController],
  providers: [PostEnterpriseService, EnterprisePrismaRepository],
})
export class EnterpriseModule {}
