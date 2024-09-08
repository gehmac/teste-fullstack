import { PrismaClient } from '@prisma/client';
import { Player } from 'src/domain/entities/player';

const prisma = new PrismaClient();

export class PrismaPlayerRepository {
  async create(entity: Player): Promise<Player> {
    const player = await prisma.player.create({
      data: {
        id: entity.props.id,
        name: entity.props.name,
        age: entity.props.age,
        teamId: entity.props.teamId,
        created_at: entity.props.createdAt,
        updated_at: entity.props.updatedAt,
      },
    });
    return Player.create({
      id: player.id,
      name: player.name,
      age: player.age,
      teamId: player.teamId,
      createdAt: player.created_at,
      updatedAt: player.updated_at,
    });
  }

  async findById(id: string): Promise<undefined | Player> {
    const result = await prisma.player.findUnique({
      where: { id },
    });
    return result ? Player.create(result) : undefined;
  }

  async update(id: string, name: string): Promise<Player> {
    const updatedPlayer = await prisma.player.update({
      where: { id },
      data: { name },
    });
    return Player.create({ ...updatedPlayer, id: updatedPlayer.id });
  }

  async delete(id: string): Promise<void> {
    await prisma.player.delete({
      where: { id },
    });
  }

  async findAll(): Promise<Player[]> {
    const teams = await prisma.player.findMany();
    return teams.map((team) => Player.create({ ...team, id: team.id }));
  }
}
