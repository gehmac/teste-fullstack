import { IsString } from 'class-validator';

export class CreatePlayerRequest {
  @IsString()
  nameTeam: string;
}
