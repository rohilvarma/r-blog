import { Url } from "next/dist/shared/lib/router/router";

export interface IBlogCard {
  id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
  description: string;
  tags: string[];
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