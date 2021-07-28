import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import CreateProductUseCase from '../../application/usecases/createProduct.usecase';
import GetAllProductsUseCase from '../../application/UseCases/getAllProducts.UseCase';
import GetProductUseCase from '../../application/UseCases/getProduct.UseCase';
import { CreateProductDto } from '../../domain/product.dto';

@Controller('product')
@ApiTags('Products')
export class ProductController {
  constructor(
    private getAllProductsUseCase: GetAllProductsUseCase,
    private getProductUseCase: GetProductUseCase,
    private createProductUseCase: CreateProductUseCase,
  ) {}

  @Get()
  getAllProducts() {
    return this.getAllProductsUseCase.handler();
  }

  @Get('id')
  @ApiParam({ type: Number, name: 'id' })
  getProduct(@Param('id') id: number) {
    return this.getProductUseCase.handler(id);
  }

  @Post('create')
  @ApiBody({ type: CreateProductDto })
  createProduct(@Body() productDTO: CreateProductDto) {
    return this.createProductUseCase.handler(productDTO);
  }
}
