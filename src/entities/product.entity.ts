import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity {
  @ApiProperty({ description: 'id of product' })
  id: number;

  @ApiProperty({ description: 'name of product' })
  name: string;

  @ApiProperty({ description: 'price of product' })
  price: number;

  @ApiProperty({ description: 'quantity of product' })
  quantity: number;

  @ApiProperty({ description: 'activity product' })
  activity: boolean;

  @ApiProperty({ description: 'id of enterprise' })
  enterpriseId?: number;

  @ApiProperty({ description: 'date creation of product' })
  createdAt?: Date;

  @ApiProperty({ description: 'date ofupdate of product' })
  updatedAt?: Date;
}
