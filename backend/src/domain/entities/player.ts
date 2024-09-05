import { v4 } from 'uuid';

export type PlayerProps = {
  _id: string;
  name: string;
  age: number;
  teamId: string;
  createdAt: Date;
  updateAt: Date;
};

export class Player {
  protected constructor(public readonly props: PlayerProps) {}

  static create(props?: PlayerProps): Player {
    return new Player({
      _id: props._id ?? v4(),
      age: props.age ?? 0,
      name: props.name ?? '',
      teamId: props.teamId ?? v4(),
      updateAt: props.updateAt ?? new Date(),
      createdAt: props.createdAt ?? new Date(),
      ...props,
    });
  }
}
