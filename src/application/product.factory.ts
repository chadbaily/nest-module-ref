import { CreateProductDto } from '../domain/product.dto';
import { Product } from '../domain/product.entity';

export default class ProductFactory {
  createProduct(productDto: CreateProductDto) {
    return new Product({ ...productDto });
  }
}
