import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Verified output: 99 chars excl. newline, sha256 b93fef58bcda241225a4fc09b35edfb180bd417c66d65aaba0effcd4d7c2c57e.
const line = "v3.8.0: fixed a bug where the bladder reported empty, then full again 38 seconds after standing up.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
