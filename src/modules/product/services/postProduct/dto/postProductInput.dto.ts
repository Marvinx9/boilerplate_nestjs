import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class PostProductInputDto {
  @ApiProperty({ description: 'name of product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'price of product' })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'quantity of product' })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'activity product' })
  @IsOptional()
  activity: boolean;

  @ApiProperty({ description: 'id of enterprise' })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  enterpriseId: number;
}
