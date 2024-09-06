import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { Player } from 'src/domain/entities/player';
import { PrismaPlayerRepository } from 'src/infra/repositories/player-repository';

export type UpdatePlayerUsecaseProps = {
  id: string;
  name: string;
};

@Injectable()
export class UpdatePlayerUsecase
  implements Usecase<UpdatePlayerUsecaseProps, Player>
{
  constructor(
    @Inject(PrismaPlayerRepository)
    private readonly prismaPlayerRepository: PrismaPlayerRepository,
  ) {}

  async execute(props: UpdatePlayerUsecaseProps): Promise<Player> {
    const result = await this.prismaPlayerRepository.update(
      props.id,
      props.name,
    );
    return result;
  }
}
