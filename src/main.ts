import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true, // transforms request body to DTO
      disableErrorMessages: process.env.ENVIRONMENT === 'DEV' ? false : true, //disable default error messages to be displayed in the response.
      transformOptions: {
        enableImplicitConversion: false, // disable for automatic conversion of type
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Quarterly-NestJs')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
