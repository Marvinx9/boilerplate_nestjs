import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostEnterpriseService } from '../services/postEnterprise/service/postEnterprise.service';
import { PostEnterpriseInputDto } from '../services/postEnterprise/dto/postEnterpriseInput.dto';

@ApiTags('Enterprise')
@Controller('/enterprise')
export class EnterpriseController {
  constructor(
    private readonly postEnterpriseProductService: PostEnterpriseService,
  ) {}

  // @Get('/profile')
  // @ApiBearerAuth()
  // @ApiOkResponse()
  // async profile(@Request() req): Promise<createUserDataDto | null> {
  //   const id = String(req.user.id);
  //   return await this.profileUserService.execute(id);
  // }

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse({ description: 'enterprise already exists!' })
  @ApiInternalServerErrorResponse({
    description: 'Ocorreu um erro interno no banco de dados',
  })
  async create(@Body() data: PostEnterpriseInputDto) {
    return await this.postEnterpriseProductService.execute(data);
  }
}
