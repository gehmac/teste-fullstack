import { v4 } from 'uuid';

export type PlayerProps = {
  id: string;
  name: string;
  age: number;
  teamId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Player {
  protected constructor(public readonly props: PlayerProps) {}

  static create(props?: Partial<PlayerProps>): Player {
    return new Player({
      id: props.id ?? v4(),
      age: props.age ?? 0,
      name: props.name ?? '',
      teamId: props.teamId ?? v4(),
      updatedAt: props.updatedAt ?? new Date(),
      createdAt: props.createdAt ?? new Date(),
      ...props,
    });
  }
}
