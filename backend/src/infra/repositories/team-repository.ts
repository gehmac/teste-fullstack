import { Team } from 'src/domain/entities/team';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaTeamRepository {
  async create(entity: Team): Promise<Team> {
    const team = await prisma.team.create({
      data: {
        name: entity.props.name,
        created_at: entity.props.createdAt,
        updated_at: entity.props.updatedAt,
      },
    });
    return Team.create({ ...team, id: team.id });
  }

  async findById(id: string): Promise<Team | undefined> {
    const team = await prisma.team.findUnique({
      where: { id },
    });
    return team ? Team.create({ ...team, id: team.id }) : undefined;
  }

  async update(id: string, name: string): Promise<Team> {
    const updatedTeam = await prisma.team.update({
      where: { id },
      data: { name },
    });
    return Team.create({ ...updatedTeam, id: updatedTeam.id });
  }

  async delete(id: string): Promise<void> {
    await prisma.team.delete({
      where: { id },
    });
  }

  async findAll(): Promise<Team[]> {
    const teams = await prisma.team.findMany();
    return teams.map((team) => Team.create({ ...team, id: team.id }));
  }
}
