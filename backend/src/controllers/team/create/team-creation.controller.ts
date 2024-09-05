import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTeamUsecase } from 'src/application/usecase/team/create-team-usecase';
import { CreateTeamRequest } from './team-creation-controller-type';

@Controller({
  version: '*',
  path: 'team',
})
export class TeamCreationController {
  constructor(
    @Inject(CreateTeamUsecase)
    private readonly createTeamUsecase: CreateTeamUsecase,
  ) {}

  @Post('create')
  async createTeams(@Body() body: CreateTeamRequest): Promise<string> {
    await this.createTeamUsecase.execute({ name: body.nameTeam });
    return 'Pong';
  }
}
