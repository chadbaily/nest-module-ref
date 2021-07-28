import { CreateProductDto } from '../../domain/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../domain/product.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductRepoPort } from '../../domain/product.port';
import { from, Observable } from 'rxjs';

@Injectable()
export class ProductService implements ProductRepoPort {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Observable<Product[]> {
    return from(this.productRepository.find());
  }

  create(createProductDto: CreateProductDto): Observable<Product> {
    return from(this.productRepository.save(createProductDto));
  }

  update(product: Product): Observable<Product> {
    return from(this.productRepository.save(product));
  }

  remove(id: number): Observable<Product> {
    return from(this.productRepository.findOneOrFail(id));
  }

  findOne(id: number): Observable<Product> {
    return from(this.productRepository.findOne(id));
  }
}
