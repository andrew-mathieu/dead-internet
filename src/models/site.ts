export type SiteType = "forum" | "blog" | "social";

export type Site = {
  id: string;
  name: string;
  type: SiteType;
  createdAt: number;
  interests: string[];
};
