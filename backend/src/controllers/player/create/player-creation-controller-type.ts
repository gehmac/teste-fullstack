import { IsNumber, IsString } from '@nestjs/class-validator';

export class CreatePlayerRequest {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  teamId: string;
}
