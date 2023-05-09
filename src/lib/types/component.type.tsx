export type IComponent = React.FC<{ children?: React.ReactNode }>;
export type IComponentWithProps<T> = React.FC<
  { children?: React.ReactNode } & T
>;
