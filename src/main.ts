import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './main.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT);
  logger.log(
    `Application running on port: http://localhost:${process.env.PORT}`,
  );
}
bootstrap();
