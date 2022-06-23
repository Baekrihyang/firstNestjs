import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';

export function swaggerSet(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('first Nest Js')
    .setDescription('Hello World !')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('hello-world', app, document);
}
