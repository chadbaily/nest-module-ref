import { Inject, Injectable } from '@nestjs/common';
import { UpdateProductDto } from '../../domain/update-product.dto';
import { ProductRepoPort } from '../../domain/product.port';
import ProductFactory from '../product.factory';

@Injectable()
export default class UpdateProductUseCase {
  constructor(
    @Inject('ProductService')
    private productRepository: ProductRepoPort,
    private productFactory: ProductFactory,
  ) {}

  // Return from the repository
  handler(productDTO: UpdateProductDto, id: number) {
    const product = this.productFactory.createProduct(productDTO, id);
    return this.productRepository.update(product);
  }
}
