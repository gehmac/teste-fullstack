import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'src/application/usecase';
import { Team } from 'src/domain/entities/team';
import { PrismaTeamRepository } from 'src/infra/repositories/team-repository';

export type CreateTeamUsecaseProps = {
  id?: string;
  name: string;
};

@Injectable()
export class CreateTeamUsecase implements Usecase<CreateTeamUsecaseProps> {
  constructor(
    @Inject(PrismaTeamRepository)
    private readonly prismaTeamRepository: PrismaTeamRepository,
  ) {}

  async execute(props: CreateTeamUsecaseProps): Promise<void> {
    await this.prismaTeamRepository.create(
      Team.create({
        _id: props.id,
        name: props.name,
      }),
    );
  }
}
