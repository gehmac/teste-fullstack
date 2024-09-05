import { Body, Controller, Delete, Inject, Param, Put } from '@nestjs/common';
import { RenameTeamRequest } from './team-moderation-controller-type';
import { GetTeamUsecase } from 'src/application/usecase/team/get-team-usecase';
import { UpdateTeamUsecase } from 'src/application/usecase/team/update-team-usecase';
import { DeleteTeamUsecase } from 'src/application/usecase/team/delete-team-usecase';

@Controller({
  version: '*',
  path: 'team',
})
export class TeamModerationController {
  constructor(
    @Inject(GetTeamUsecase)
    private readonly getTeamUsecase: GetTeamUsecase,
    @Inject(UpdateTeamUsecase)
    private readonly updateTeamUsecase: UpdateTeamUsecase,
    @Inject(DeleteTeamUsecase)
    private readonly deleteTeamUsecase: DeleteTeamUsecase,
  ) {}

  @Put('/:teamId/rename')
  async renameTeam(
    @Param('teamId') teamId: string,
    @Body() body: RenameTeamRequest,
  ): Promise<string> {
    const team = await this.getTeamUsecase.execute(teamId);
    if (!team) {
      throw new Error(`not found ${teamId}`);
    }

    if (team.props.name === body.newName) {
      return 'success';
    }
    await this.updateTeamUsecase.execute({
      id: teamId,
      name: body.newName,
    });
    return 'success';
  }

  @Delete('/:teamId/delete')
  async deleteTeam(@Param('teamId') teamId: string): Promise<string> {
    const team = await this.getTeamUsecase.execute(teamId);
    if (!team) {
      return 'success';
    }

    await this.deleteTeamUsecase.execute(teamId);
    return 'success';
  }
}
