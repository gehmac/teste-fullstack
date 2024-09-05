import { IsString } from 'class-validator';

export class CreateTeamRequest {
  @IsString()
  nameTeam: string;
}
