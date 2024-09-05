import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';

export type UpdateTeamUsecaseProps = {
  id: string;
  name: string;
};

@Injectable()
export class DeleteTeamUsecase implements Usecase<string, void> {
  constructor(
    @Inject(PrismaTeamRepository)
    private readonly prismaTeamRepository: PrismaTeamRepository,
  ) {}

  async execute(teamId: string): Promise<void> {
    return await this.prismaTeamRepository.delete(teamId);
  }
}
