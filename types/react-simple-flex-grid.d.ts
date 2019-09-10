export function Col(r: any): any;
export namespace Col {
  const defaultProps: {
    offset: number;
  };
}
export class Row {
  static defaultProps: {
    align: string;
    gutter: number;
    justify: string;
  };
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
