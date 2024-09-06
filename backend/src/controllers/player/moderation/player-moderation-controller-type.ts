import { IsString } from 'class-validator';

export class RenamePlayerRequest {
  @IsString()
  newName: string;
}
