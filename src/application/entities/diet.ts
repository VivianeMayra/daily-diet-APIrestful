import { randomUUID } from 'crypto';

export interface DietProps {
  title: string;
  content: string;
  createdAt?: Date;
  dietType: boolean;
}

export class Diet {
  private _id: string;
  private props: DietProps;

  constructor(props: DietProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title(): string {
    return this.props.title;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set dietType(dietType: boolean) {
    this.props.dietType = dietType;
  }

  public get dietType(): boolean {
    return this.props.dietType;
  }
}
