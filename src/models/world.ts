import { User } from "./user";
import { Event } from "./event";
import { Site } from "./site";
import { Relationship } from "./relationship";

export type World = {
  seed: number;
  year: number;
  users: User[];
  sites: Site[];
  events: Event[];
  relationships: Relationship[];
};
