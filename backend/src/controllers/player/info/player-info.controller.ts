import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetAllPlayersUsecase } from 'src/application/usecase/player/get-all-players-usecase';
import { GetPlayerUsecase } from 'src/application/usecase/player/get-player-usecase';
import { PlayerProps } from 'src/domain/entities/player';

@Controller({
  version: '*',
  path: 'player',
})
export class PlayerInfoController {
  constructor(
    @Inject(GetPlayerUsecase)
    private readonly getPlayerUsecase: GetPlayerUsecase,
    @Inject(GetAllPlayersUsecase)
    private readonly getAllPlayersUsecase: GetAllPlayersUsecase,
  ) {}

  @Get('all')
  async listOfPlayres(): Promise<PlayerProps[]> {
    const result = await this.getAllPlayersUsecase.execute();

    return result.map((it) => it.props);
  }

  @Get('/:teamId/')
  async getPlayer(@Param('teamId') teamId: string): Promise<PlayerProps> {
    const result = await this.getPlayerUsecase.execute(teamId);

    return result.props;
  }
}
