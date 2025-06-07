import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class PutProductInputDto {
  @ApiProperty({ required: false, description: 'name of product' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, description: 'price of product' })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  price?: number;

  @ApiProperty({ required: false, description: 'quantity of product' })
  @IsNumber()
  @IsOptional()
  @Min(1)
  quantity?: number;

  @ApiProperty({ required: false, description: 'activity product' })
  @IsOptional()
  activity?: boolean;
}
