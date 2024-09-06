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

  @Put('/:PlayerId/rename')
  async renamePlayer(
    @Param('PlayerId') PlayerId: string,
    @Body() body: RenamePlayerRequest,
  ): Promise<string> {
    const Player = await this.getPlayerUsecase.execute(PlayerId);
    if (!Player) {
      throw new Error(`not found ${PlayerId}`);
    }

    if (Player.props.name === body.newName) {
      return 'success';
    }
    await this.updatePlayerUsecase.execute({
      id: PlayerId,
      name: body.newName,
    });
    return 'success';
  }

  @Delete('/:PlayerId/delete')
  async deletePlayer(@Param('PlayerId') PlayerId: string): Promise<string> {
    const Player = await this.getPlayerUsecase.execute(PlayerId);
    if (!Player) {
      return 'success';
    }

    await this.deletePlayerUsecase.execute(PlayerId);
    return 'success';
  }
}
