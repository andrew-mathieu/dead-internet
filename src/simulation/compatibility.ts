import { User } from "#models/user.js";
import { Site } from "#models/site.js";

export function calculateCompatibility(user: User, site: Site): number {
  const matchingInterests = user.interests.filter((interest) =>
    site.interests.includes(interest),
  );

  return matchingInterests.length / user.interests.length;
}
