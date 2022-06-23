import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSet } from 'src/swagger/swaggerSet';
import { SwaggerModule } from '@nestjs/swagger';
import { Options } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerSet(app);

  await app.listen(8080);
}
bootstrap();
