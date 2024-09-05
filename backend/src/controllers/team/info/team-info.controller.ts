import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetTeamUsecase } from 'src/application/usecase/team/get-team-usecase';
import { TeamProps } from 'src/domain/entities/team';

@Controller({
  version: '*',
  path: 'team',
})
export class TeamGetController {
  constructor(
    @Inject(GetTeamUsecase)
    private readonly getTeamUsecase: GetTeamUsecase,
  ) {}

  @Get('/:teamId/')
  async renameTeam(@Param('teamId') teamId: string): Promise<TeamProps> {
    const result = await this.getTeamUsecase.execute(teamId);

    return result.props;
  }
}
