import { World } from "#models/world.js";
import { Event } from "#models/event.js";
import { random, randomString } from "#core/random.js";

export function simulateReplies(world: World, post: Event): void {
  if (!post.siteId) {
    return;
  }

  const author = world.users.find((user) => user.id === post.userId);

  if (!author) {
    return;
  }

  const possibleResponders = world.users.filter((user) => {
    if (user.id === author.id) {
      return false;
    }

    if (user.joinedAt > world.year) {
      return false;
    }

    return user.siteIds.includes(post.siteId!);
  });

  for (const responder of possibleResponders) {
    const site = world.sites.find((site) => site.id === post.siteId);

    if (!site) {
      return;
    }

    const userInterested = responder.interests.includes(post.topic!);

    const siteInterested = site.interests.includes(post.topic!);

    let probability = responder.activity * 0.1;

    if (userInterested) {
      probability += 0.3;
    }

    if (siteInterested) {
      probability += 0.2;
    }

    if (random() > probability) {
      continue;
    }

    const reply: Event = {
      id: randomString(12),
      type: "reply_created",
      year: world.year,
      userId: responder.id,
      siteId: post.siteId,
      targetEventId: post.id,
      targetUserId: author.id,
    };

    world.events.push(reply);
  }
}
