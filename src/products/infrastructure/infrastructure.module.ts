import { forwardRef, Module } from '@nestjs/common';
import { Product } from '../domain/product.entity';
import { ProductsController } from './primary/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './secondary/product.service';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
  exports: [ProductService],
})
export class InfrastructureModule {}
