export type EventType = "post_created" | "reply_created";

export type Event = {
  id: string;
  type: EventType;
  year: number;

  userId: string;

  siteId?: string;
  targetEventId?: string;
  targetUserId?: string;

  topic?: string;
  content?: string;
};
