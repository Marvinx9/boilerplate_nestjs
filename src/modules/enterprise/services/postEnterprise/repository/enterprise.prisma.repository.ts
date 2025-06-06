import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { EnterpriseEntity } from 'src/entities/enterprise.entity';
import { PostEnterpriseInputDto } from '../dto/postEnterpriseInput.dto';

@Injectable()
export class EnterprisePrismaRepository {
  constructor(private prismaService: PrismaService) {}

  async findEnterpriseByCNPJ(cnpj: string): Promise<EnterpriseEntity | null> {
    return await this.prismaService.enterprise.findUnique({
      where: {
        cnpj,
      },
    });
  }

  async save(data: PostEnterpriseInputDto): Promise<void> {
    await this.prismaService.enterprise.create({
      data,
    });
  }

  // async findByUsername(username: string): Promise<createUserDataDto | null> {
  //   return await this.prismaService.user.findUnique({
  //     where: {
  //       username,
  //     },
  //   });
  // }

  // async findByUsernameOrEmail(
  //   username: string,
  //   email: string,
  // ): Promise<postProductInput | null> {
  //   return await this.prismaService.user.findFirst({
  //     where: {
  //       OR: [{ username }, { email }],
  //     },
  //   });
  // }

  // async uploadAvatar(id: string, path: string): Promise<void> {
  //   await this.prismaService.user.update({
  //     data: {
  //       avatarUrl: path,
  //     },
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
