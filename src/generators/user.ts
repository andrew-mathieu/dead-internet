import { User } from "#models/user.js";
import { usernames } from "#data/names.js";
import { archetypes } from "#data/archetypes.js";
import { personalityProfiles } from "#data/personalities.js";

import {
  randomInt,
  randomChoice,
  randomString,
  randomFloat,
} from "#core/random.js";

export function generateUser(usedUsernames: Set<string>): User {
  const availableUsernames = usernames.filter(
    (username) => !usedUsernames.has(username),
  );

  const username = randomChoice(availableUsernames);

  usedUsernames.add(username);

  const archetype = randomChoice(archetypes);

  const personalityProfile = personalityProfiles.find(
    (profile) => profile.archetype === archetype.name,
  );

  if (!personalityProfile) {
    throw new Error(`No personality profile for ${archetype.name}`);
  }

  const personality = {
    sociability: randomFloat(
      personalityProfile.sociability[0],
      personalityProfile.sociability[1],
    ),

    aggression: randomFloat(
      personalityProfile.aggression[0],
      personalityProfile.aggression[1],
    ),

    creativity: randomFloat(
      personalityProfile.creativity[0],
      personalityProfile.creativity[1],
    ),

    curiosity: randomFloat(
      personalityProfile.curiosity[0],
      personalityProfile.curiosity[1],
    ),
  };

  const activity = randomFloat(
    personalityProfile.activity[0],
    personalityProfile.activity[1],
  );

  const userInterests = new Set<string>();

  while (userInterests.size < 3) {
    userInterests.add(randomChoice(archetype.interests));
  }

  const joinedAt = randomInt(2010, 2018);

  const ageAtJoin = randomInt(archetype.ageRange[0], archetype.ageRange[1]);

  const birthYear = joinedAt - ageAtJoin;

  return {
    id: randomString(12),
    username,
    birthYear,
    archetype: archetype.name,
    interests: [...userInterests],
    joinedAt: randomInt(2010, 2018),

    personality,
    activity,
    siteIds: [],
  };
}
