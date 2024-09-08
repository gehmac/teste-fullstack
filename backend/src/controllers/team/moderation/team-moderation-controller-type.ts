import { IsString } from '@nestjs/class-validator';

export class RenameTeamRequest {
  @IsString()
  newName: string;
}
