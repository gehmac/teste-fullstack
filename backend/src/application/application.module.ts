import { Module, Provider } from '@nestjs/common';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';
import { CreateTeamUsecase } from './usecase/team/create-team-usecase';
import { UpdateTeamUsecase } from './usecase/team/update-team-usecase';
import { GetTeamUsecase } from './usecase/team/get-team-usecase';

const repositories: Provider[] = [
  {
    provide: PrismaTeamRepository,
    useClass: PrismaTeamRepository,
  },
];

const usecases: Provider[] = [
  CreateTeamUsecase,
  UpdateTeamUsecase,
  GetTeamUsecase,
];

@Module({
  providers: [...repositories, ...usecases],
  exports: [...repositories, ...usecases],
})
export class ApplicationModule {}
