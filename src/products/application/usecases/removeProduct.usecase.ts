import { Inject, Injectable } from '@nestjs/common';
import { ProductRepoPort } from '../../domain/product.port';

@Injectable()
export default class RemoveProductUseCase {
  constructor(
    @Inject('ProductService')
    private productRepository: ProductRepoPort,
  ) {}

  // Return from the repository
  handler(id: number) {
    return this.productRepository.remove(id);
  }
}
