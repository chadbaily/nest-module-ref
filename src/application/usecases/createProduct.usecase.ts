import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../domain/product.dto';
import { ProductRepoPort } from '../../domain/product.port';
import ProductFactory from '../product.factory';

@Injectable()
export default class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private productRepository: ProductRepoPort,
    private productFactory: ProductFactory,
  ) {}

  // Return from the repository
  handler(productDTO: CreateProductDto) {
    const product = this.productFactory.createProduct(productDTO);
    return this.productRepository.create(product);
  }
}
