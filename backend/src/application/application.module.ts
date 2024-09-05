import { Module, Provider } from '@nestjs/common';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';
import { CreateTeamUsecase } from './usecase/create-team/create-team-usecase';

const repositories: Provider[] = [
  {
    provide: PrismaTeamRepository,
    useClass: PrismaTeamRepository,
  },
];

const usecases: Provider[] = [CreateTeamUsecase];

@Module({
  providers: [...repositories, ...usecases],
  exports: [...repositories, ...usecases],
})
export class ApplicationModule {}
