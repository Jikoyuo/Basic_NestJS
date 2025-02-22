/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1'); //setting global prefix agar url lebih terstruktur
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
