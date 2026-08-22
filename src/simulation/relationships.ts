import { World } from "#models/world.js";
import { Relationship } from "#models/relationship.js";
import { random, randomString } from "#core/random.js";

export function simulateRelationships(world: World): void {
  const activeUsers = world.users.filter((user) => user.joinedAt <= world.year);

  for (let i = 0; i < activeUsers.length; i++) {
    for (let j = i + 1; j < activeUsers.length; j++) {
      const userA = activeUsers[i];
      const userB = activeUsers[j];

      const alreadyRelated = world.relationships.some(
        (relationship) =>
          (relationship.userA === userA.id &&
            relationship.userB === userB.id) ||
          (relationship.userA === userB.id && relationship.userB === userA.id),
      );

      if (alreadyRelated) {
        continue;
      }

      const shareSite = userA.siteIds.some((siteId) =>
        userB.siteIds.includes(siteId),
      );

      if (!shareSite) {
        continue;
      }

      if (random() > 0.1) {
        continue;
      }

      const relationship: Relationship = {
        id: randomString(12),
        userA: userA.id,
        userB: userB.id,
        type: "acquaintance",
        strength: 0.2,
        createdAt: world.year,
      };

      world.relationships.push(relationship);
    }
  }
}

export function strengthenRelationship(
  world: World,
  userA: string,
  userB: string,
): void {
  const relationship = world.relationships.find(
    (relationship) =>
      (relationship.userA === userA && relationship.userB === userB) ||
      (relationship.userA === userB && relationship.userB === userA),
  );

  if (!relationship) {
    return;
  }

  relationship.strength = Math.min(1, relationship.strength + 0.1);

  if (relationship.strength >= 0.6 && relationship.type === "acquaintance") {
    relationship.type = "friendship";
  }
}
