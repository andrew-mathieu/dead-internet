export type RelationshipType = "friendship" | "rivalry" | "acquaintance";

export type Relationship = {
  id: string;
  userA: string;
  userB: string;
  type: RelationshipType;
  strength: number;
  createdAt: number;
};
