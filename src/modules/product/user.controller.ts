import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateUserService } from './services/createUser.service';
import { CreateUserInputDto } from './dto/createUserInput.dto';
import { CreateUserValidationPipe } from './pipe/createUserValidation.pipe';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProfileUserService } from './services/profileUser.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  AvatarDto,
  createUserDataDto,
  FileDto,
} from './dto/createUserData.dto';

@Controller('/users')
@ApiTags('Users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly profileUserService: ProfileUserService,
  ) {}

  @Get('/profile')
  @ApiBearerAuth()
  @ApiOkResponse()
  async profile(@Request() req): Promise<createUserDataDto | null> {
    const id = String(req.user.id);
    return await this.profileUserService.execute(id);
  }

  @Post()
  @ApiCreatedResponse()
  @ApiBadRequestResponse({ description: 'User already exists!' })
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserInputDto) {
    return await this.createUserService.execute(data);
  }
}
