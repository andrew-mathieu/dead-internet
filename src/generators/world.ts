import { Site } from "#models/site.js";
import { World } from "#models/world.js";
import { generateUser } from "./user.js";
import { generateSite } from "./site.js";
import { randomInt } from "#core/random.js";
import { calculateCompatibility } from "#simulation/compatibility.js";

export function generateWorld(
  seed: number,
  userCount = 10,
  siteCount = 3,
): World {
  const users = [];

  const sites: Site[] = [];

  const usedUsernames = new Set<string>();
  const usedSiteNames = new Set<string>();

  for (let i = 0; i < userCount; i++) {
    users.push(generateUser(usedUsernames));
  }

  for (let i = 0; i < siteCount; i++) {
    sites.push(generateSite(usedSiteNames));
  }

  for (const user of users) {
    const availableSites = sites.filter(
      (site) => site.createdAt <= user.joinedAt,
    );
    const compatibleSites = availableSites
      .map((site) => ({
        site,
        compatibility: calculateCompatibility(user, site),
      }))
      .sort((a, b) => b.compatibility - a.compatibility);

    const bestSite = compatibleSites[0];

    user.siteIds = [bestSite.site.id];

    if (
      compatibleSites.length > 1 &&
      compatibleSites[1].compatibility >= 0.33
    ) {
      user.siteIds.push(compatibleSites[1].site.id);
    }
  }

  return {
    seed,
    year: 2010,
    users,
    sites,
    events: [],
    relationships: [],
  };
}
