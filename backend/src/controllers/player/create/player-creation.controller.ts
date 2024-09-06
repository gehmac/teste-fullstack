import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTeamUsecase } from 'src/application/usecase/team/create-team-usecase';
import { CreatePlayerRequest } from './player-creation-controller-type';

@Controller({
  version: '*',
  path: 'player',
})
export class PlayerCreationController {
  constructor(
    @Inject(CreateTeamUsecase)
    private readonly createTeamUsecase: CreateTeamUsecase,
  ) {}

  @Post('create')
  async createTeams(@Body() body: CreatePlayerRequest): Promise<string> {
    await this.createTeamUsecase.execute({ name: body.nameTeam });
    return 'success';
  }
}
