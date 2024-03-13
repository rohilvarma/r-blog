export interface IBlogCard {
  uuid: string;
  updatedAt: Date;
  title: string;
  description: string;
  tags?: {
    name: string
  }[]
}

export interface ITag {
  id: string;
  tagName: string;
  blog: IBlogCard[]
}

export interface INav {
  key: number;
  name: string;
  linkRoute: string;
}

export interface IMenuStore {
  isOpen: boolean;
  toggle: () => void;
}