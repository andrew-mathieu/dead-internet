import { World } from "#models/world.js";
import { Event } from "#models/event.js";
import { random, randomString } from "#core/random.js";

export function simulateYear(world: World): void {
  world.year++;

  for (const user of world.users) {
    if (world.year < user.joinedAt) {
      continue;
    }

    if (random() < user.activity) {
      const event: Event = {
        id: randomString(12),
        type: "post_created",
        year: world.year,
        userId: user.id,
      };

      world.events.push(event);
    }
  }
}
