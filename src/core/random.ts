import seedrandom from "seedrandom";

let rng = seedrandom();

export function setSeed(seed: string | number) {
  rng = seedrandom(String(seed));
}

export function random(): number {
  return rng();
}

export function randomInt(min: number, max: number): number {
  return Math.floor(random() * (max - min + 1)) + min;
}

export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(random() * array.length)];
}
