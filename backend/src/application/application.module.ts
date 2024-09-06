import { Module, Provider } from '@nestjs/common';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';
import { CreateTeamUsecase } from './usecase/team/create-team-usecase';
import { UpdateTeamUsecase } from './usecase/team/update-team-usecase';
import { GetTeamUsecase } from './usecase/team/get-team-usecase';
import { DeleteTeamUsecase } from './usecase/team/delete-team-usecase';
import { CreatePlayerUsecase } from './usecase/player/create-player-usecase';
import { DeletePlayerUsecase } from './usecase/player/delete-player-usecase';
import { GetAllPlayersUsecase } from './usecase/player/get-all-players-usecase';
import { GetPlayerUsecase } from './usecase/player/get-player-usecase';
import { UpdatePlayerUsecase } from './usecase/player/update-player-usecase';
import { PrismaPlayerRepository } from 'src/infra/repositories/player-repository';

const repositories: Provider[] = [
  {
    provide: PrismaTeamRepository,
    useClass: PrismaTeamRepository,
  },
  {
    provide: PrismaPlayerRepository,
    useClass: PrismaPlayerRepository,
  },
];

const usecases: Provider[] = [
  CreateTeamUsecase,
  UpdateTeamUsecase,
  GetTeamUsecase,
  DeleteTeamUsecase,
  CreatePlayerUsecase,
  UpdatePlayerUsecase,
  GetPlayerUsecase,
  DeletePlayerUsecase,
  GetAllPlayersUsecase,
];

@Module({
  providers: [...repositories, ...usecases],
  exports: [...repositories, ...usecases],
})
export class ApplicationModule {}
