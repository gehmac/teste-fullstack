import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

let app: INestApplication;

async function createAppModule(): Promise<NestExpressApplication> {
  const appModule = await NestFactory.create<NestExpressApplication>(AppModule);

  return appModule;
}

export default async function getApp(): Promise<INestApplication> {
  if (!app) {
    app = await createAppModule();
    await app.init();
  }
  return app;
}
