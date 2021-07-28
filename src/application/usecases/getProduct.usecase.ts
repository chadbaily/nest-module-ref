import { Inject, Injectable } from '@nestjs/common';
import { ProductRepoPort } from '../../domain/product.port';

@Injectable()
export default class GetProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private productRepository: ProductRepoPort,
  ) {}

  // Return from the repository
  handler(id: number) {
    return this.productRepository.find(id);
  }
}
