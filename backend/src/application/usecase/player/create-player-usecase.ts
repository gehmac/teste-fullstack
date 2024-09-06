import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { Player } from 'src/domain/entities/player';
import { PrismaPlayerRepository } from 'src/infra/repositories/player-repository';

export type CreatePlayerUsecaseProps = {
  id?: string;
  name: string;
  age: number;
  teamId: string;
};

@Injectable()
export class CreatePlayerUsecase implements Usecase<CreatePlayerUsecaseProps> {
  constructor(
    @Inject(PrismaPlayerRepository)
    private readonly prismaPlayerRepository: PrismaPlayerRepository,
  ) {}

  async execute(props: CreatePlayerUsecaseProps): Promise<void> {
    await this.prismaPlayerRepository.create(
      Player.create({
        id: props.id,
        name: props.name,
        age: props.age,
        teamId: props.teamId,
      }),
    );
  }
}
