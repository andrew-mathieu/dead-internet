export type Archetype = {
  name: string;
  interests: string[];
  ageRange: [number, number];
};

export const archetypes: Archetype[] = [
  {
    name: "gamer",
    interests: [
      "gaming",
      "esports",
      "technology",
      "anime",
      "memes",
      "streaming",
    ],
    ageRange: [13, 35],
  },
  {
    name: "musician",
    interests: [
      "music",
      "metal",
      "guitar",
      "production",
      "concerts",
      "technology",
    ],
    ageRange: [16, 40],
  },
  {
    name: "artist",
    interests: [
      "art",
      "photography",
      "anime",
      "design",
      "illustration",
      "music",
    ],
    ageRange: [15, 40],
  },
  {
    name: "shitposter",
    interests: ["memes", "gaming", "anime", "movies", "internet culture"],
    ageRange: [13, 30],
  },
  {
    name: "lurker",
    interests: ["technology", "movies", "gaming", "paranormal", "forums"],
    ageRange: [15, 45],
  },
  {
    name: "administrator",
    interests: [
      "technology",
      "programming",
      "gaming",
      "networking",
      "sysadmin",
    ],
    ageRange: [20, 50],
  },
  {
    name: "conspiracy",
    interests: [
      "paranormal",
      "technology",
      "conspiracy",
      "politics",
      "cryptids",
    ],
    ageRange: [18, 60],
  },
  {
    name: "developer",
    interests: ["programming", "technology", "open source", "gaming", "coffee"],
    ageRange: [18, 45],
  },
  {
    name: "student",
    interests: ["studying", "memes", "gaming", "music", "social media"],
    ageRange: [14, 25],
  },
  {
    name: "athlete",
    interests: ["fitness", "sports", "nutrition", "outdoors", "motivation"],
    ageRange: [14, 40],
  },
  {
    name: "gymrat",
    interests: [
      "fitness",
      "bodybuilding",
      "nutrition",
      "supplements",
      "motivation",
    ],
    ageRange: [16, 45],
  },
  {
    name: "traveler",
    interests: ["travel", "photography", "culture", "food", "languages"],
    ageRange: [20, 55],
  },
  {
    name: "foodie",
    interests: ["cooking", "food", "restaurants", "wine", "travel"],
    ageRange: [20, 60],
  },
  {
    name: "cinephile",
    interests: ["movies", "cinema", "television", "pop culture", "streaming"],
    ageRange: [16, 50],
  },
  {
    name: "bookworm",
    interests: ["books", "literature", "writing", "poetry", "philosophy"],
    ageRange: [15, 65],
  },
  {
    name: "otaku",
    interests: ["anime", "manga", "cosplay", "gaming", "japan"],
    ageRange: [13, 35],
  },
  {
    name: "sneakerhead",
    interests: ["sneakers", "streetwear", "fashion", "hip-hop", "resale"],
    ageRange: [14, 30],
  },
  {
    name: "fashionista",
    interests: ["fashion", "beauty", "shopping", "social media", "design"],
    ageRange: [16, 40],
  },
  {
    name: "petlover",
    interests: ["pets", "dogs", "cats", "animals", "veterinary"],
    ageRange: [15, 65],
  },
  {
    name: "environmentalist",
    interests: [
      "environment",
      "climate",
      "sustainability",
      "politics",
      "outdoors",
    ],
    ageRange: [16, 55],
  },
  {
    name: "politico",
    interests: ["politics", "news", "debate", "economics", "history"],
    ageRange: [18, 65],
  },
  {
    name: "historian",
    interests: ["history", "documentaries", "books", "museums", "politics"],
    ageRange: [18, 70],
  },
  {
    name: "scientist",
    interests: ["science", "space", "technology", "research", "documentaries"],
    ageRange: [18, 60],
  },
  {
    name: "spacefan",
    interests: ["space", "astronomy", "science", "sci-fi", "technology"],
    ageRange: [12, 60],
  },
  {
    name: "carenthusiast",
    interests: ["cars", "motorsport", "mechanics", "technology", "racing"],
    ageRange: [16, 55],
  },
  {
    name: "biker",
    interests: ["motorcycles", "outdoors", "mechanics", "travel", "adventure"],
    ageRange: [20, 60],
  },
  {
    name: "diyer",
    interests: ["diy", "woodworking", "home improvement", "gardening", "tools"],
    ageRange: [25, 65],
  },
  {
    name: "parent",
    interests: ["parenting", "family", "cooking", "education", "home"],
    ageRange: [25, 55],
  },
  {
    name: "boomer",
    interests: ["news", "gardening", "family", "history", "television"],
    ageRange: [55, 80],
  },
  {
    name: "spiritual",
    interests: [
      "spirituality",
      "meditation",
      "yoga",
      "philosophy",
      "astrology",
    ],
    ageRange: [18, 60],
  },
  {
    name: "atheist",
    interests: ["philosophy", "science", "debate", "politics", "skepticism"],
    ageRange: [16, 60],
  },
  {
    name: "collector",
    interests: [
      "collectibles",
      "toys",
      "trading cards",
      "nostalgia",
      "auctions",
    ],
    ageRange: [16, 60],
  },
  {
    name: "tabletop-gamer",
    interests: ["board games", "tabletop rpg", "dnd", "miniatures", "gaming"],
    ageRange: [14, 50],
  },
  {
    name: "streamer",
    interests: [
      "streaming",
      "gaming",
      "content creation",
      "social media",
      "technology",
    ],
    ageRange: [16, 35],
  },
  {
    name: "influencer",
    interests: [
      "social media",
      "content creation",
      "fashion",
      "lifestyle",
      "marketing",
    ],
    ageRange: [16, 35],
  },
  {
    name: "entrepreneur",
    interests: [
      "business",
      "finance",
      "startups",
      "marketing",
      "self-improvement",
    ],
    ageRange: [20, 55],
  },
  {
    name: "investor",
    interests: ["finance", "stocks", "crypto", "economics", "real estate"],
    ageRange: [22, 65],
  },
  {
    name: "crypto-bro",
    interests: ["crypto", "finance", "technology", "memes", "trading"],
    ageRange: [18, 40],
  },
  {
    name: "prepper",
    interests: ["survivalism", "outdoors", "conspiracy", "diy", "tools"],
    ageRange: [20, 65],
  },
  {
    name: "hiker",
    interests: ["outdoors", "hiking", "camping", "photography", "fitness"],
    ageRange: [18, 65],
  },
  {
    name: "angler",
    interests: ["fishing", "outdoors", "boating", "nature", "camping"],
    ageRange: [20, 70],
  },
  {
    name: "hunter",
    interests: ["hunting", "outdoors", "firearms", "wildlife", "camping"],
    ageRange: [20, 65],
  },
  {
    name: "punk",
    interests: ["music", "punk", "politics", "tattoos", "diy"],
    ageRange: [15, 45],
  },
  {
    name: "raver",
    interests: ["music", "electronic", "festivals", "dancing", "nightlife"],
    ageRange: [16, 35],
  },
  {
    name: "hippie",
    interests: ["music", "spirituality", "environment", "art", "festivals"],
    ageRange: [18, 60],
  },
  {
    name: "academic",
    interests: ["research", "philosophy", "science", "books", "education"],
    ageRange: [22, 65],
  },
  {
    name: "medstudent",
    interests: ["medicine", "science", "studying", "biology", "health"],
    ageRange: [18, 35],
  },
  {
    name: "lawyer",
    interests: ["law", "politics", "debate", "news", "history"],
    ageRange: [24, 65],
  },
  {
    name: "engineer",
    interests: [
      "engineering",
      "technology",
      "programming",
      "science",
      "gaming",
    ],
    ageRange: [20, 55],
  },
  {
    name: "military",
    interests: ["military", "history", "firearms", "fitness", "politics"],
    ageRange: [18, 55],
  },
  {
    name: "expat",
    interests: ["travel", "languages", "culture", "politics", "food"],
    ageRange: [20, 60],
  },
  {
    name: "retiree",
    interests: ["gardening", "travel", "family", "history", "television"],
    ageRange: [60, 85],
  },
  {
    name: "urbanist",
    interests: [
      "urbanism",
      "architecture",
      "transit",
      "politics",
      "photography",
    ],
    ageRange: [18, 50],
  },
  {
    name: "trueCrimeFan",
    interests: [
      "true crime",
      "podcasts",
      "documentaries",
      "psychology",
      "mystery",
    ],
    ageRange: [16, 55],
  },
  {
    name: "wrestlingFan",
    interests: ["wrestling", "sports", "television", "memes", "pop culture"],
    ageRange: [14, 45],
  },
  {
    name: "footballFan",
    interests: ["football", "sports", "betting", "beer", "fantasy sports"],
    ageRange: [14, 65],
  },
];
