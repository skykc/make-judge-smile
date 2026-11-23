// Make the Judge Smile — one line about a small good thing that happened today.
// The program writes the entry to /output/entry.txt (UTF-8, 1-200 characters).
// Judge criteria, in order: subject (small good thing today) > warmth > surprise
// > concreteness (one real detail) > fresh wording. Second-person "you" puts the
// judge inside the scene; the 6:12 bus is the concrete detail, and the driver's
// reaction is the unexpected turn: he treats the passenger's thanks as a debt
// HE owes, not the other way round.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning you sprint for the 6:12 bus in the rain and it waits for you — then the driver waves off your thanks like you'd done him the favour.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
