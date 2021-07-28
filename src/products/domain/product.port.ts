/* istanbul ignore file */
import { Observable } from 'rxjs';
import { Product } from './product.entity';

export interface ProductRepoPort {
  findAll(): Observable<Product[]>;
  findOne(id: number): Observable<Product>;
  create(product: Product): Observable<Product>;
  update(product: Product): Observable<Product>;
  remove(id: number): Observable<Product>;
}
