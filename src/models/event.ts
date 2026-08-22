export type EventType = "post_created" | "reply_created";

export type Event = {
  id: string;
  type: EventType;
  year: number;
  userId: string;
  targetUserId?: string;
};
