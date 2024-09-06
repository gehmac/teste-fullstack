import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { ApplicationModule } from 'src/application/application.module';
import { TeamCreationController } from './team/create/team-creation.controller';
import { PlayerCreationController } from './player/create/player-creation.controller';
import { PlayerInfoController } from './player/info/player-info.controller';
import { PlayerModerationController } from './player/moderation/player-moderation.controller';
import { TeamGetController } from './team/info/team-info.controller';
import { TeamModerationController } from './team/moderation/team-moderation.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [
    PingController,
    TeamCreationController,
    TeamGetController,
    TeamModerationController,
    PlayerCreationController,
    PlayerInfoController,
    PlayerModerationController,
  ],
  providers: [],
})
export class ControllersModule {}
