import { forwardRef, Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import ProductFactory from './product.factory';
import CreateProductUseCase from './usecases/createProduct.usecase';
import GetProductUseCase from './UseCases/getProduct.UseCase';

@Module({
  // Does this need to be here. Is there somewhere else that we can put it?
  imports: [forwardRef(() => InfrastructureModule)],
  controllers: [],
  providers: [
    CreateProductUseCase,
    GetProductUseCase,
    GetProductUseCase,
    ProductFactory,
  ],
  exports: [CreateProductUseCase, GetProductUseCase, GetProductUseCase],
})
export class ApplicationModule {}
