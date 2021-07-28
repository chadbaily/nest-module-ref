/* istanbul ignore file */

import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from '../application/application.module';
import { Product } from '../domain/product.entity';
import { ProductController } from './primary/product.controller';
import { ProductRepository } from './secondary/product.repo';

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [ProductController],
  providers: [ProductRepository],
  exports: [ProductRepository],
})
export class InfrastructureModule {}
