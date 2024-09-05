export interface Usecase<
  Props = Record<string, unknown> | unknown,
  Result = void,
> {
  execute(props: Props): Promise<Result>;
}
