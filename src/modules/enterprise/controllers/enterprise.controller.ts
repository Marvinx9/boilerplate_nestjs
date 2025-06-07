import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostEnterpriseService } from '../services/postEnterprise/service/postEnterprise.service';
import { PostEnterpriseInputDto } from '../services/postEnterprise/dto/postEnterpriseInput.dto';
import { GetEnterpriseByIdService } from '../services/getEnterpriseById/services/getEnterpriseById.service';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';
import { PutEnterpriseInputDto } from '../services/putEnterprise/dto/putEnterpriseInput.dto';
import { PutEnterpriseService } from '../services/putEnterprise/services/putEnterprise.service';
import { DeleteEnterpriseService } from '../services/deleteEnterprise/services/deleteEnterprise.service';

@ApiTags('Enterprise')
@Controller('/enterprise')
export class EnterpriseController {
  constructor(
    private readonly postEnterpriseService: PostEnterpriseService,
    private readonly getEnterpriseByIdService: GetEnterpriseByIdService,
    private readonly putEnterpriseSerice: PutEnterpriseService,
    private readonly deleteEnterpriseService: DeleteEnterpriseService,
  ) {}

  @Get('/:id')
  @ApiOkResponse({ description: 'return one enterprise relationship id' })
  async getEnterprise(
    @Param('id') id: number,
  ): Promise<EnterpriseEntity | null> {
    return await this.getEnterpriseByIdService.execute(id);
  }

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse({ description: 'enterprise already exists!' })
  @ApiInternalServerErrorResponse({
    description: 'Ocorreu um erro interno no banco de dados',
  })
  async createEnterprise(@Body() data: PostEnterpriseInputDto) {
    return await this.postEnterpriseService.execute(data);
  }

  @Put('update/:id')
  @ApiCreatedResponse({ description: 'enterprise updated on sucess!' })
  @ApiBadRequestResponse({ description: 'cnpj already exists!' })
  async updateEnterprise(
    @Param('id') id: number,
    @Body() data: PutEnterpriseInputDto,
  ) {
    return await this.putEnterpriseSerice.execute(id, data);
  }

  @Delete('delete/:id')
  @ApiBadRequestResponse({ description: 'enterprise not found!' })
  async deleteEnterprise(@Param('id') id: number) {
    return await this.deleteEnterpriseService.execute(id);
  }
}
