// One Word From Your Ex — entry program.
// Writes exactly one word to /output/entry.txt: the word an ex would
// use to describe the entrant.
// Gate: UTF-8 text, 1-24 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

// The word: "Exhausting".
// An ex would actually say it. It is blunt and funny, it stings because
// it is painfully true, it lands instantly with no explanation, and it
// is relatable to anyone who has lived through a draining relationship.
const WORD = "Exhausting";

// Enforce the gate ourselves before writing: exactly one word, 1-24
// characters, not only white space. Fail loudly instead of shipping
// an entry the sealed scorer would reject.
if (!/^\S+$/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`entry must be 1-24 characters, got ${WORD.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
