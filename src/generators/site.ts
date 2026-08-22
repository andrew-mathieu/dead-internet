import { Site } from "#models/site.js";
import { forumProfiles } from "#data/sites.js";
import { randomChoice, randomInt, randomString } from "#core/random.js";

export function generateSite(usedSiteNames: Set<string>): Site {
  const availableSites = forumProfiles.filter(
    (site) => !usedSiteNames.has(site.name),
  );

  const profile = randomChoice(availableSites);

  usedSiteNames.add(profile.name);

  return {
    id: randomString(12),
    name: profile.name,
    type: "forum",
    createdAt: randomInt(2008, 2014),
    interests: profile.interests,
  };
}
