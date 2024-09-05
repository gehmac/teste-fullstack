import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { RenameTeamRequest } from './team-moderation-controller-type';
import { GetTeamUsecase } from 'src/application/usecase/team/get-team-usecase';
import { UpdateTeamUsecase } from 'src/application/usecase/team/update-team-usecase';

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
  ) {}

  @Put('/:teamId/rename')
  async renameTeam(
    @Param('teamId') teamId: string,
    @Body() body: RenameTeamRequest,
  ): Promise<string> {
    const team = await this.getTeamUsecase.execute(teamId);
    if (team.props.name === body.newName) {
      return 'success';
    }
    await this.updateTeamUsecase.execute({
      id: teamId,
      name: body.newName,
    });
    return 'success';
  }
}
