# Dead Internet

An AI-powered procedural mystery game. Each run simulates either a dead forum or a user who's gone silent — explore the timeline, dig through the threads, and figure out what happened.

Nothing is scripted. Content is generated on the fly, so every seed tells a different story. Share your seed with a friend and investigate the same mystery together.

## How it works

- 🌱 **Seed-based generation** — every playthrough is built from a seed. Same seed, same mystery.
- 🧑‍🤝‍🧑 **A simulated world** — procedurally generated users, forums, and relationships, each with their own personality, interests, and activity patterns.
- 📅 **Year-by-year simulation** — the world evolves over time, generating events (posts, replies, relationships) based on each user's behavior.
- 🧵 **No fixed win condition** — the game continues until you understand what happened. There's no script to follow, just clues to piece together.
- 🤝 **Shareable investigations** — pass your seed to a friend so you can investigate together, separately or side by side.

## Status

🚧 Early development. The core simulation engine (users, sites, relationships, yearly events) is in place; the investigation/mystery layer is still to come.

## Tech stack

- **TypeScript** running on Node.js via [tsx](https://github.com/privatenumber/tsx)
- **[seedrandom](https://github.com/davidbau/seedrandom)** for deterministic, seed-based procedural generation
- Subpath imports (`#models/*`, `#generators/*`, `#core/*`, etc.) for clean internal module resolution

## Project structure

```
src/
├── core/          # Seeded random number generation
├── data/          # Static data: archetypes, interests, names, personalities, sites
├── generators/     # World, user, and site generation
├── models/        # TypeScript types (User, Site, Event, Relationship, World)
├── simulation/     # Yearly simulation logic: events, relationships, compatibility
└── index.ts        # Entry point
```

## Getting started

```bash
# Clone the repo
git clone https://github.com/andrew-mathieu/dead-internet.git
cd dead-internet

# Install dependencies
npm install

# Run the simulation
npm run dev
```

This runs the current simulation with a fixed seed, generating a small world of users and sites, simulating five years of activity, and printing the results to the console.

## Contributing

Pull requests are welcome! If you'd like to contribute:

1. Fork the repo
2. Create a branch for your feature or fix (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Open a pull request

For larger changes, consider opening an issue first to discuss what you'd like to change.

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE). If you modify this code and run it as a service, you're required to make your changes available under the same license.

## Author

Made by [Andrew Mathieu](https://github.com/andrew-mathieu).
