import { User } from "#models/user.js";
import { Event } from "#models/event.js";
import { Site } from "#models/site.js";

export type ReplyContext = {
  author: User;
  responder: User;
  post: Event;
  site: Site;
  year: number;
};
