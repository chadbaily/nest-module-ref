/* istanbul ignore file */
import { Observable } from 'rxjs';
import { Product } from './product.entity';

export interface ProductRepoPort {
  findAll(): Observable<Product[]>;
  find(id: number): Observable<Product>;
  create(product: Product): Observable<Product>;
}
