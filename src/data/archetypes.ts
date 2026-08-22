export type Archetype = {
  name: string;
  interests: string[];
  ageRange: [number, number];
};

export const archetypes: Archetype[] = [
  {
    name: "gamer",
    interests: ["gaming", "technology", "anime", "memes"],
    ageRange: [13, 35],
  },
  {
    name: "musician",
    interests: ["music", "metal", "technology", "movies"],
    ageRange: [16, 40],
  },
  {
    name: "artist",
    interests: ["art", "photography", "anime", "music"],
    ageRange: [15, 40],
  },
  {
    name: "shitposter",
    interests: ["memes", "gaming", "anime", "movies"],
    ageRange: [13, 30],
  },
  {
    name: "lurker",
    interests: ["technology", "movies", "gaming", "paranormal"],
    ageRange: [15, 45],
  },
  {
    name: "administrator",
    interests: ["technology", "programming", "gaming"],
    ageRange: [20, 50],
  },
  {
    name: "conspiracy",
    interests: ["paranormal", "technology", "conspiracy", "politics"],
    ageRange: [18, 60],
  },
];
