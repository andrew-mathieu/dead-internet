import { setSeed } from "./core/random.js";
import { generateWorld } from "./generators/world.js";
import { simulateYear } from "./simulation/simulateYear.js";

const seed = 12345;

setSeed(seed);

const world = generateWorld(seed, 10, 5);

for (let i = 0; i < 15; i++) {
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

console.table(
  world.relationships.map((relationship) => ({
    type: relationship.type,
    strength: relationship.strength.toFixed(2),
    createdAt: relationship.createdAt,

    userA: world.users.find((user) => user.id === relationship.userA)?.username,

    userB: world.users.find((user) => user.id === relationship.userB)?.username,
  })),
);

console.table(
  world.events.map((event) => ({
    year: event.year,
    type: event.type,

    user: world.users.find((user) => user.id === event.userId)?.username,

    target: event.targetUserId
      ? world.users.find((user) => user.id === event.targetUserId)?.username
      : "",

    site: event.siteId
      ? world.sites.find((site) => site.id === event.siteId)?.name
      : "",
  })),
);
