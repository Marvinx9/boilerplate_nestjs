import { Module } from '@nestjs/common';
import { PostProductService } from './services/postProduct/services/postProduct.service';
import { PostProductRepository } from './services/postProduct/repository/postProduct.repository';
import { ProductController } from './controllers/product.controller';
import { GetProductByIdService } from './services/getProductById/services/getProductById.service';
import { GetProductByIdRepository } from './services/getProductById/repository/getProductById.repository';
import { ListProductService } from './services/listProduct/services/listProduct.service';
import { ListProductRepository } from './services/listProduct/repository/listProduct.repository';
import { PutProductService } from './services/putProduct/services/putProduct.service';
import { PutProductRepository } from './services/putProduct/repository/putProduct.repository';
import { DeleteProductService } from './services/deleteProduct/services/deleteProduct.service';
import { DeleteProductRepository } from './services/deleteProduct/repository/deleteProduct.repository';
@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    PostProductService,
    GetProductByIdService,
    PostProductRepository,
    GetProductByIdRepository,
    ListProductService,
    ListProductRepository,
    PutProductService,
    PutProductRepository,
    DeleteProductService,
    DeleteProductRepository,
  ],
})
export class ProductModule {}
