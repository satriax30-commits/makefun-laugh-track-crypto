// Laugh Track: The Crypto Trading Joke Contest
// Writes one original joke about crypto and trading life to /output/entry.txt
// Deterministic: no clock, no randomness, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "After three years of losing money trading crypto, I finally found a profitable strategy: selling a course about trading crypto.";

// Guard: the entry must be exactly one line, 1-200 characters, no trailing newline.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error("entry must be one line, 1-200 characters");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
