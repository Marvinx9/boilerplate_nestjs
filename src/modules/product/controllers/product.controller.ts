import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostProductService } from '../services/postProduct/services/postProduct.service';
import { PostProductInputDto } from '../services/postProduct/dto/postProductInput.dto';
import { ProductEntity } from 'src/entities/product.entity';
import { GetProductByIdService } from '../services/getProductById/services/getProductById.service';
import { ListProductInputDto } from '../services/listProduct/dto/listProductInput.dto';
import { ListProductService } from '../services/listProduct/services/listProduct.service';
import { PutProductService } from '../services/putProduct/services/putProduct.service';
import { PutProductInputDto } from '../services/putProduct/dto/putProductInput.dto';
import { DeleteProductService } from '../services/deleteProduct/services/deleteProduct.service';

@ApiTags('Products')
@Controller('/products')
export class ProductController {
  constructor(
    private readonly postProductService: PostProductService,
    private readonly getProductByIdService: GetProductByIdService,
    private readonly listProductService: ListProductService,
    private readonly putProductService: PutProductService,
    private readonly deleteProductService: DeleteProductService,
  ) {}

  @Get('/:id')
  @ApiOkResponse({ description: 'return one product relationship id' })
  async getProduct(@Param('id') id: number): Promise<ProductEntity | null> {
    return await this.getProductByIdService.execute(id);
  }

  @Get('/list/all')
  @ApiOkResponse({
    description: 'return list of products relationship enterprise id',
  })
  async listProduct(@Query() data: ListProductInputDto) {
    console.log('aqio---00');

    return await this.listProductService.execute(data);
  }

  @Post()
  @ApiCreatedResponse({ description: 'product created' })
  @ApiBadRequestResponse({ description: 'enterprise not found!' })
  async createProduct(@Body() data: PostProductInputDto) {
    return await this.postProductService.execute(data);
  }

  @Put('update/:id')
  @ApiCreatedResponse({ description: 'product updated on sucess!' })
  @ApiBadRequestResponse({ description: 'product not found!' })
  async updateProduct(
    @Param('id') id: number,
    @Body() data: PutProductInputDto,
  ) {
    return await this.putProductService.execute(id, data);
  }

  @Delete('delete/:id')
  @ApiBadRequestResponse({ description: 'product not found!' })
  async deleteProduct(@Param('id') id: number) {
    return await this.deleteProductService.execute(id);
  }
}
