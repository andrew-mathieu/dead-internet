import { setSeed } from "./core/random.js";
import { generateWorld } from "./generators/world.js";
import { simulateYear } from "./simulation/simulateYear.js";

const seed = 12345;

setSeed(seed);

const world = generateWorld(seed, 10);

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
  world.events.map((event) => ({
    year: event.year,
    type: event.type,

    user: world.users.find((user) => user.id === event.userId)?.username,

    site: world.sites.find((site) => site.id === event.siteId)?.name,

    topic: event.topic,

    target: world.users.find((user) => user.id === event.targetUserId)
      ?.username,

    content: event.content,
  })),
);
