import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core/nest-factory';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('The Todo API documentation')
    .setVersion('1.0')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger to appear at the root URL '/'
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
