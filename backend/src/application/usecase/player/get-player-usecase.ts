import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { Player } from 'src/domain/entities/player';
import { PrismaPlayerRepository } from 'src/infra/repositories/player-repository';

@Injectable()
export class GetPlayerUsecase implements Usecase<string, Player> {
  constructor(
    @Inject(PrismaPlayerRepository)
    private readonly prismaPlayerRepository: PrismaPlayerRepository,
  ) {}

  async execute(id: string): Promise<Player> {
    const result = await this.prismaPlayerRepository.findById(id);
    return result;
  }
}
