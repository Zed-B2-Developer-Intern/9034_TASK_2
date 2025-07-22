// types/index.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github:string;
  liveUrl?: string;
};
