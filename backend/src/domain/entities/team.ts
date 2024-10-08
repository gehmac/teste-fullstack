import { v4 } from 'uuid';

export type TeamProps = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Team {
  protected constructor(public readonly props: TeamProps) {}

  static create(props?: Partial<TeamProps>): Team {
    return new Team({
      id: props.id ?? v4(),
      name: props.name ?? '',
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
      ...props,
    });
  }

  static checkNameIsEqual(name: string, comparisonName: string): boolean {
    return name === comparisonName;
  }
}
