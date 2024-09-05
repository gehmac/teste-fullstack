import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { Team } from 'src/domain/entities/team';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';

export type UpdateTeamUsecaseProps = {
  id: string;
  name: string;
};

@Injectable()
export class UpdateTeamUsecase
  implements Usecase<UpdateTeamUsecaseProps, Team>
{
  constructor(
    @Inject(PrismaTeamRepository)
    private readonly prismaTeamRepository: PrismaTeamRepository,
  ) {}

  async execute(props: UpdateTeamUsecaseProps): Promise<Team> {
    const result = await this.prismaTeamRepository.update(props.id, props.name);
    return result;
  }
}
