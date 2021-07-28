import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Product } from '../../domain/product.entity';
import { ProductRepoPort } from '../../domain/product.port';

@Injectable()
export class ProductRepository implements ProductRepoPort {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   * Find all products in the database
   */
  findAll(): Observable<Product[]> {
    return from(this.productRepository.find());
  }

  /**
   * Find a product by ID
   */
  find(id: number): Observable<Product> {
    return from(this.productRepository.findOne(id));
  }

  /**
   * Create a product
   */
  create(product: Product) {
    return from(this.productRepository.save(product));
  }
}
