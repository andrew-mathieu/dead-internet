import { World } from "#models/world.js";
import { Event } from "#models/event.js";
import { random, randomString } from "#core/random.js";
import { simulateRelationships } from "./relationships.js";
import { simulateInteractions } from "./interactions.js";
import { randomChoice } from "#core/random.js";
import { simulateReplies } from "./replies.js";
import { topics } from "#data/topics.js";
import { generatePostContent } from "#generators/post.js";

export function simulateYear(world: World): void {
  world.year++;

  const newPosts: Event[] = [];

  for (const user of world.users) {
    const topic =
      random() < 0.8 ? randomChoice(user.interests) : randomChoice(topics);

    const content = generatePostContent(user, topic);

    if (world.year < user.joinedAt) {
      continue;
    }

    if (random() < user.activity) {
      const siteId = user.siteIds[Math.floor(random() * user.siteIds.length)];

      const event: Event = {
        id: randomString(12),
        type: "post_created",
        year: world.year,
        userId: user.id,
        siteId,
        topic,
        content,
      };

      world.events.push(event);

      simulateReplies(world, event);
    }
  }

  simulateInteractions(world, newPosts);
  simulateRelationships(world);
}
