import { Archetype } from "./archetypes.js";

export type PersonalityProfile = {
  archetype: Archetype["name"];

  sociability: [number, number];
  aggression: [number, number];
  creativity: [number, number];
  curiosity: [number, number];

  activity: [number, number];
};

export const personalityProfiles: PersonalityProfile[] = [
  {
    archetype: "gamer",

    sociability: [0.3, 0.8],
    aggression: [0.2, 0.7],
    creativity: [0.3, 0.8],
    curiosity: [0.4, 0.9],

    activity: [0.4, 0.9],
  },

  {
    archetype: "musician",

    sociability: [0.4, 0.9],
    aggression: [0.1, 0.6],
    creativity: [0.7, 1],
    curiosity: [0.5, 1],

    activity: [0.4, 0.9],
  },

  {
    archetype: "artist",

    sociability: [0.3, 0.8],
    aggression: [0.1, 0.5],
    creativity: [0.8, 1],
    curiosity: [0.6, 1],

    activity: [0.3, 0.8],
  },

  {
    archetype: "shitposter",

    sociability: [0.5, 1],
    aggression: [0.3, 0.9],
    creativity: [0.4, 0.9],
    curiosity: [0.3, 0.8],

    activity: [0.6, 1],
  },

  {
    archetype: "lurker",

    sociability: [0, 0.4],
    aggression: [0, 0.4],
    creativity: [0.2, 0.7],
    curiosity: [0.5, 1],

    activity: [0.1, 0.5],
  },

  {
    archetype: "administrator",

    sociability: [0.4, 0.9],
    aggression: [0.1, 0.6],
    creativity: [0.3, 0.8],
    curiosity: [0.5, 0.9],

    activity: [0.7, 1],
  },

  {
    archetype: "conspiracy",

    sociability: [0.2, 0.8],
    aggression: [0.3, 0.9],
    creativity: [0.5, 1],
    curiosity: [0.8, 1],

    activity: [0.3, 0.8],
  },
];
