import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { Team } from 'src/domain/entities/team';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';

@Injectable()
export class GetTeamUsecase implements Usecase<string, Team> {
  constructor(
    @Inject(PrismaTeamRepository)
    private readonly prismaTeamRepository: PrismaTeamRepository,
  ) {}

  async execute(id: string): Promise<Team> {
    const result = await this.prismaTeamRepository.findById(id);
    return result;
  }
}
