import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name' })
  readonly name: string;

  @ApiProperty({ description: 'Product category' })
  readonly category: string;

  @ApiProperty({ description: 'Product description' })
  readonly description: string;

  @ApiProperty({ description: 'Product price' })
  readonly price: number;
}
