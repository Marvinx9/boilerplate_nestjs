import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class ListProductInputDto {
  @ApiProperty({ description: 'id of enterprise' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  enterpriseId: number;

  @ApiProperty({ description: 'size of list' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @Min(1)
  size: number;

  @ApiProperty({ description: 'page of show' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @Min(1)
  page: number;
}
