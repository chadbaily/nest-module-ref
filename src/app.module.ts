import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // database port
      port: 5432, // database port
      username: 'nestdemo', // username
      password: 'pass123', // user password
      database: 'nestdemo', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
    InfrastructureModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
