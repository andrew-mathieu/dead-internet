import { setSeed } from "./core/random.js";
import { generateWorld } from "./generators/world.js";
import { simulateYear } from "./simulation/simulateYear.js";

const seed = 48291;

setSeed(seed);

const world = generateWorld(seed, 4);

for (let i = 0; i < 5; i++) {
  simulateYear(world);
}

for (const user of world.users) {
  console.log(
    user.username,
    "→",
    user.siteIds.map(
      (siteId) => world.sites.find((site) => site.id === siteId)?.name,
    ),
  );
}

console.table(
  world.users.map((user) => ({
    username: user.username,
    age: world.year - user.birthYear,
    archetype: user.archetype,
    interests: user.interests,
    joinedAt: user.joinedAt,
    activity: user.activity.toFixed(2),
    siteIds: user.siteIds,
  })),
);
console.table(world.sites);
console.table(world.events);
