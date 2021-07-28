import { CreateProductDto } from '../domain/create-product.dto';
import { Product } from '../domain/product.entity';
import { UpdateProductDto } from '../domain/update-product.dto';

export default class ProductFactory {
  createProduct(productDto: CreateProductDto | UpdateProductDto, id?: number) {
    if (!!id) {
      return new Product({ ...productDto, id });
    } else return new Product({ ...productDto });
  }
}
