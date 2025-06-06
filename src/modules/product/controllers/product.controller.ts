import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostProductService } from '../services/postProduct/services/postProduct.service';
import { PostProductInputDto } from '../services/postProduct/dto/postProductInput.dto';

@ApiTags('Products')
@Controller('/products')
export class ProductController {
  constructor(private readonly postProductService: PostProductService) {}

  // @Get('/profile')
  // @ApiBearerAuth()
  // @ApiOkResponse()
  // async profile(@Request() req): Promise<createUserDataDto | null> {
  //   const id = String(req.user.id);
  //   return await this.profileUserService.execute(id);
  // }

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse({ description: 'enterprise not found!' })
  async create(@Body() data: PostProductInputDto) {
    return await this.postProductService.execute(data);
  }
}
