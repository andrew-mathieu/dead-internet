import { World } from "#models/world.js";
import { Event } from "#models/event.js";
import { random, randomString } from "#core/random.js";
import { simulateRelationships } from "./relationships.js";
import { simulateInteractions } from "./interactions.js";
import { randomChoice } from "#core/random.js";

export function simulateYear(world: World): void {
  world.year++;

  const newPosts: Event[] = [];

  for (const user of world.users) {
    if (world.year < user.joinedAt) {
      continue;
    }

    if (random() < user.activity) {
      const siteId = randomChoice(user.siteIds);

      const post: Event = {
        id: randomString(12),
        type: "post_created",
        year: world.year,
        userId: user.id,
        siteId,
      };

      world.events.push(post);
      newPosts.push(post);
    }
  }

  simulateInteractions(world, newPosts);
  simulateRelationships(world);
}
