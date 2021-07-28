import { IsNumber, IsPositive, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Product category' })
  @IsString()
  readonly category: string;

  @ApiProperty({ description: 'Product description' })
  @IsString()
  readonly description: string;

  @ApiProperty({ description: 'Product price' })
  @IsNumber({ maxDecimalPlaces: 0 })
  @IsPositive()
  readonly price: number;

  constructor(props: Partial<CreateProductDto>) {
    Object.assign(this, props);
  }
}
