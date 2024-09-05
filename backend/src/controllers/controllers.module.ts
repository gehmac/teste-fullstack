import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { ApplicationModule } from 'src/application/application.module';
import { TeamCreationController } from './team/create/team-creation.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [PingController, TeamCreationController],
  providers: [],
})
export class ControllersModule {}
