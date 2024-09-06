import { Body, Controller, Delete, Inject, Param, Put } from '@nestjs/common';
import { DeletePlayerUsecase } from 'src/application/usecase/player/delete-player-usecase';
import { GetPlayerUsecase } from 'src/application/usecase/player/get-player-usecase';
import { RenamePlayerRequest } from './player-moderation-controller-type';
import { UpdatePlayerUsecase } from 'src/application/usecase/player/update-player-usecase';

@Controller({
  version: '*',
  path: 'player',
})
export class PlayerModerationController {
  constructor(
    @Inject(GetPlayerUsecase)
    private readonly getPlayerUsecase: GetPlayerUsecase,
    @Inject(UpdatePlayerUsecase)
    private readonly updatePlayerUsecase: UpdatePlayerUsecase,
    @Inject(DeletePlayerUsecase)
    private readonly deletePlayerUsecase: DeletePlayerUsecase,
  ) {}

  @Put('/:playerId/rename')
  async renamePlayer(
    @Param('playerId') playerId: string,
    @Body() body: RenamePlayerRequest,
  ): Promise<string> {
    const Player = await this.getPlayerUsecase.execute(playerId);
    if (!Player) {
      throw new Error(`not found ${playerId}`);
    }

    if (Player.props.name === body.newName) {
      return 'success';
    }
    await this.updatePlayerUsecase.execute({
      id: playerId,
      name: body.newName,
    });
    return 'success';
  }

  @Delete('/:playerId/delete')
  async deletePlayer(@Param('playerId') playerId: string): Promise<string> {
    const Player = await this.getPlayerUsecase.execute(playerId);
    if (!Player) {
      return 'success';
    }

    await this.deletePlayerUsecase.execute(playerId);
    return 'success';
  }
}
