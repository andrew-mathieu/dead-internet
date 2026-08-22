import { User } from "../models/user.js";
import { randomChoice } from "../core/random.js";

const templates: Record<string, Record<string, string[]>> = {
  musician: {
    music: [
      "anyone else listening to {interest}?",
      "what do you guys think about {interest}?",
      "I've been listening to {interest} all day",
      "{interest} is seriously underrated",
    ],
  },

  shitposter: {
    memes: [
      "lol this is the funniest thing I've seen today",
      "why is this meme so accurate",
      "I can't stop laughing at this",
      "internet humor was better back then",
    ],

    gaming: [
      "this game is fucking ridiculous lol",
      "anyone else wasting their life playing this?",
      "I swear I'm addicted to this game",
    ],
  },

  lurker: {
    technology: [
      "does anyone know how this works?",
      "anyone else having this problem?",
      "I've been trying to figure this out",
    ],
  },

  conspiracy: {
    conspiracy: [
      "there's definitely something weird going on here",
      "does anyone else think this isn't a coincidence?",
      "I've been looking into this for a while",
    ],

    paranormal: [
      "has anyone else experienced something like this?",
      "I don't think there's a normal explanation for this",
    ],
  },
};

export function generatePostContent(user: User, topic: string): string {
  const archetypeTemplates = templates[user.archetype];

  const topicTemplates = archetypeTemplates?.[topic];

  if (!topicTemplates) {
    return `anyone interested in ${topic}?`;
  }

  const template = randomChoice(topicTemplates);

  const interest = randomChoice(user.interests);

  return template.replace("{interest}", interest);
}
