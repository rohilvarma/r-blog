import { INav, ITitle } from "./interfaces";

export const iconSize: number = 30;

export const navLinks: INav[] = [
  {
    key: 0,
    name: "Home",
    linkRoute: "/"
  },
  {
    key: 1,
    name: "Blogs",
    linkRoute: "/blogs",
  },
  {
    key: 2,
    name: "Tags",
    linkRoute: "/tags",
  },
];

export const titleContent: ITitle[] = [
  {
    name: 'Latest',
    detail: 'A blog created with Next.JS, Tailwind CSS and Prisma.'
  },
  {
    name: 'All Blogs',
    detail: 'All the blogs I have written so far. Feel free to have a look.'
  },
  {
    name: 'Tags',
    detail: 'Feel to filter blogs based on your interests.'
  },
  {
    name: 'Error Encountered',
    detail: "Please check the error message below and contact me."
  }
]
