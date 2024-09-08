import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePlayerRequest } from './player-creation-controller-type';
import { CreatePlayerUsecase } from 'src/application/usecase/player/create-player-usecase';

@Controller({
  version: '*',
  path: 'player',
})
export class PlayerCreationController {
  constructor(
    @Inject(CreatePlayerUsecase)
    private readonly createPLayerUsecase: CreatePlayerUsecase,
  ) {}

  @Post('create')
  async createTeams(@Body() body: CreatePlayerRequest): Promise<string> {
    await this.createPLayerUsecase.execute({
      name: body.name,
      age: body.age,
      teamId: body.teamId,
    });
    return 'success';
  }
}
