import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetPlayerUsecase } from 'src/application/usecase/player/get-player-usecase';
import { PlayerProps } from 'src/domain/entities/player';

@Controller({
  version: '*',
  path: 'player',
})
export class PlayerGetController {
  constructor(
    @Inject(GetPlayerUsecase)
    private readonly getPlayerUsecase: GetPlayerUsecase,
  ) {}

  @Get('/:teamId/')
  async renamePLayer(@Param('teamId') teamId: string): Promise<PlayerProps> {
    const result = await this.getPlayerUsecase.execute(teamId);

    return result.props;
  }
}
