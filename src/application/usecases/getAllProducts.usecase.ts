import { Inject, Injectable } from '@nestjs/common';
import { ProductRepoPort } from '../../domain/product.port';

@Injectable()
export default class GetAllProductsUseCase {
  constructor(
    @Inject('ProductRepository')
    private productRepository: ProductRepoPort,
  ) {}

  // Return from the repository
  handler() {
    return this.productRepository.findAll();
  }
}
