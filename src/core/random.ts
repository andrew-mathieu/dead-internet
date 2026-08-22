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

export function randomString(length: number): string {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(random() * chars.length)];
  }

  return result;
}

export function randomFloat(min: number, max: number): number {
  return random() * (max - min) + min;
}
