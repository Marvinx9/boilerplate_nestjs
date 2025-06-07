import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class PutEnterpriseInputDto {
  @ApiProperty({ description: 'name of enterprise' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'cnpj of enterprise' })
  @IsOptional()
  @IsString()
  cnpj?: string;

  @ApiProperty({ description: 'telephone of enterprise' })
  @IsOptional()
  @IsString()
  telephone?: string;

  @ApiProperty({ description: 'email of enterprise' })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ description: 'address of enterprise' })
  @IsOptional()
  @IsString()
  address?: string;
}
