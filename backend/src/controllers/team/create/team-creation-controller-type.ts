import { IsString } from '@nestjs/class-validator';

export class CreateTeamRequest {
  @IsString()
  nameTeam: string;
}
