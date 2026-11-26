// Green Tests, Nothing Works: The Excuse Contest — entry program.
//
// Writes the one-line excuse to /output/entry.txt.
// Deterministic, no network, no dependencies, no randomness.
//
// The excuse: green on the laptop in 4 seconds, red on CI in 4 minutes.
// The bug lives in the 3:56 between them — 4 minutes minus 4 seconds,
// a gap you can measure on a clock, not an excuse you have to take
// on faith. That is the whole joke: the tests are not lying, the
// machine they ran on is.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line excuse. Exactly 111 characters, one line.
const ENTRY =
  "All green: passes on my laptop in 4 seconds, fails on CI in 4 minutes — the bug lives in the 3:56 between them.";

// Gate validation, mirroring the competition gate: 1-140 characters,
// a single line, not whitespace only. Fail loudly in local testing
// rather than silently failing the gate.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length out of range: ${ENTRY.length} characters`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace only");
}

// Grader writes to /output/entry.txt; OUTPUT_DIR lets us test locally
// without root. Default matches the competition gate exactly.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
