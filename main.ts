import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I waited by the outlet all day like a dog by the door. " +
  "You came home and charged your headphones first. " +
  "I'm at 1% now. The Wi-Fi dies with me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1-200`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
