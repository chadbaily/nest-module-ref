import { forwardRef, Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import ProductFactory from './product.factory';
import CreateProductUseCase from './usecases/createProduct.usecase';
import FindAllProductsUseCase from './usecases/findAllProducts.usecase';
import FindProductUseCase from './usecases/findProduct.usecase';
import RemoveProductUseCase from './usecases/removeProduct.usecase';
import UpdateProductUseCase from './usecases/updateProduct.usecase';

@Module({
  // Does this need to be here. Is there somewhere else that we can put it?
  imports: [forwardRef(() => InfrastructureModule)],
  controllers: [],
  providers: [
    CreateProductUseCase,
    FindAllProductsUseCase,
    FindProductUseCase,
    RemoveProductUseCase,
    UpdateProductUseCase,
    ProductFactory,
  ],
  exports: [
    CreateProductUseCase,
    FindAllProductsUseCase,
    FindProductUseCase,
    RemoveProductUseCase,
    UpdateProductUseCase,
  ],
})
export class ApplicationModule {}
