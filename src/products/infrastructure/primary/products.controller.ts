import { CreateProductDto } from '../../domain/create-product.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiBody,
  ApiNotFoundResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import CreateProductUseCase from '../../application/usecases/createProduct.usecase';
import FindAllProductsUseCase from '../../application/usecases/findAllProducts.usecase';
import FindProductUseCase from '../../application/usecases/findProduct.usecase';
import RemoveProductUseCase from '../../application/usecases/removeProduct.usecase';
import UpdateProductUseCase from '../../application/usecases/updateProduct.usecase';
import { UpdateProductDto } from '../../domain/update-product.dto';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private findAllProductsUseCase: FindAllProductsUseCase,
    private findProductUseCase: FindProductUseCase,
    private removeProductUseCase: RemoveProductUseCase,
    private updateProductUseCase: UpdateProductUseCase,
  ) {}

  @ApiParam({ type: Number, name: 'id' })
  @Get(':id')
  @ApiNotFoundResponse({ description: 'api not found' })
  findOne(@Param('id') id: number) {
    return this.findProductUseCase.handler(id);
  }

  @Get()
  @ApiNotFoundResponse({ description: 'api not found' })
  findAll() {
    return this.findAllProductsUseCase.handler();
  }

  @Post('/create')
  @ApiBody({ type: CreateProductDto })
  @ApiNotFoundResponse({ description: 'api not found' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductUseCase.handler(createProductDto);
  }

  @ApiParam({ type: Number, name: 'id' })
  @Patch(':id')
  @ApiBody({ type: UpdateProductDto })
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProductUseCase.handler(updateProductDto, id);
  }

  @ApiParam({ type: Number, name: 'id' })
  @Delete('/:id')
  @ApiNotFoundResponse({ description: 'api not found' })
  remove(@Param('id') id: number) {
    return this.removeProductUseCase.handler(id);
  }
}
