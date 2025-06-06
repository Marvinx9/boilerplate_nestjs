import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { PrismaModule } from './infra/database/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
