import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './products/infrastructure/infrastructure.module';
import { ApplicationModule } from './products/application/application.module';

// import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // database port
      port: 5432, // database port
      username: 'neerpg', // username
      password: 'pass123', // user password
      database: 'neerpg', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),

    InfrastructureModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
