import { randomInt, randomChoice } from "../utils/utils";
import type { User } from "../models/user";
import { usernames } from "../data/names";
import { archetypes } from "../data/archetypes";
import { interests } from "../data/interests";

export function generateUser(): User {
  return {
    id: crypto.randomUUID(),
    username: randomChoice(usernames),
    age: randomInt(14, 40),
    archetype: randomChoice(archetypes),
    interests: [
      randomChoice(interests),
      randomChoice(interests),
      randomChoice(interests),
    ],
    joinedAt: randomInt(2010, 2018),
  };
}
