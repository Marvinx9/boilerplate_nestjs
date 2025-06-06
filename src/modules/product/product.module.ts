import { Module } from '@nestjs/common';
import { PostProductService } from './services/postProduct/services/postProduct.service';
import { PostProductRepository } from './services/postProduct/repository/postProduct.repository';
import { ProductController } from './controllers/product.controller';
@Module({
  imports: [],
  controllers: [ProductController],
  providers: [PostProductService, PostProductRepository],
})
export class ProductModule {}
