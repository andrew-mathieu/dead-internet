export type Personality = {
  sociability: number;
  aggression: number;
  creativity: number;
  curiosity: number;
};

export type User = {
  id: string;
  username: string;
  birthYear: number;
  archetype: string;
  interests: string[];
  joinedAt: number;
  personality: Personality;
  activity: number;
  siteIds: string[];
};
