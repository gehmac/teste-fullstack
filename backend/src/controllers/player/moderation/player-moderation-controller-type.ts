import { IsString } from '@nestjs/class-validator';

export class RenamePlayerRequest {
  @IsString()
  newName: string;
}
