import { ApiProperty } from '@nestjs/swagger';

export class PostEnterpriseInputDto {
  @ApiProperty({ description: 'name of product' })
  name: string;

  @ApiProperty({ description: 'price of product' })
  cnpj: string;

  @ApiProperty({ description: 'quantity of product' })
  telephone: string;

  @ApiProperty({ description: 'activity product' })
  email: string;

  @ApiProperty({ description: 'id of enterprise' })
  address: string;

  @ApiProperty({ description: 'date creation of product' })
  createdAt: Date;

  @ApiProperty({ description: 'date ofupdate of product' })
  updatedAt: Date;
}
