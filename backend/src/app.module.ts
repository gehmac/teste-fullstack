import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { ConfigModule } from './_shared/config/configure.module';

@Module({
  imports: [ConfigModule, ControllersModule],
})
export class AppModule {}
