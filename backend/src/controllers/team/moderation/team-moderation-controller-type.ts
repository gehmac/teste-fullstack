import { IsString } from 'class-validator';

export class RenameTeamRequest {
  @IsString()
  newName: string;
}
