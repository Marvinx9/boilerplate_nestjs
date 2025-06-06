import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma.module';
import { ProductModule } from './modules/product/product.module';
import { EnterpriseModule } from './modules/enterprise/enterprise.module';

@Module({
  imports: [PrismaModule, ProductModule, EnterpriseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
