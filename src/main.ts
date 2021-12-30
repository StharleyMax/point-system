import { ValidationPipe, Logger } from '@nestjs/common';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/Http-exception.filter';


//Create a Logger instance
const logger = new Logger('Main');
/*
const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
};
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000, () => {
    logger.log('Sistema rodando!!');
  });


  const options = new DocumentBuilder()
    .setTitle('System Point')
    .setDescription('System Point')
    .setVersion('1.0')
    .addTag('system point')
    .build();


  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);


  app.useGlobalFilters(new AllExceptionsFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
}

bootstrap();
