import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { PrismaPlayerRepository } from 'src/infra/repositories/player-repository';

export type UpdatePlayerUsecaseProps = {
  id: string;
  name: string;
};

@Injectable()
export class DeletePlayerUsecase implements Usecase<string, void> {
  constructor(
    @Inject(PrismaPlayerRepository)
    private readonly prismaPlayerRepository: PrismaPlayerRepository,
  ) {}

  async execute(playerId: string): Promise<void> {
    return await this.prismaPlayerRepository.delete(playerId);
  }
}
