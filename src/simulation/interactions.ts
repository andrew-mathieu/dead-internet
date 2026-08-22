import { World } from "#models/world.js";
import { User } from "#models/user.js";
import { Event } from "#models/event.js";
import { random, randomString } from "#core/random.js";
import { strengthenRelationship } from "./relationships.js";

function shareSite(userA: User, userB: User): string | null {
  return userA.siteIds.find((siteId) => userB.siteIds.includes(siteId)) ?? null;
}

export function simulateInteractions(world: World, posts: Event[]): void {
  const activeUsers = world.users.filter((user) => user.joinedAt <= world.year);

  for (const post of posts) {
    const author = activeUsers.find((user) => user.id === post.userId);

    if (!author) {
      continue;
    }

    for (const user of activeUsers) {
      if (user.id === author.id) {
        continue;
      }

      const siteId = shareSite(author, user);

      if (!siteId) {
        continue;
      }

      if (random() > user.activity * 0.4) {
        continue;
      }

      const reply: Event = {
        id: randomString(12),
        type: "reply_created",
        year: world.year,
        userId: user.id,
        targetUserId: author.id,
        siteId,
      };

      strengthenRelationship(world, user.id, author.id);

      world.events.push(reply);
    }
  }
}
