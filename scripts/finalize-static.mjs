import { readdir, rm } from "node:fs/promises";
import path from "node:path";
// Original lossless audio remains in source; only the web copies ship in dist.
const directory = path.resolve("dist/music/audio");
for (const entry of await readdir(directory, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith(".flac")) continue;
  const file = path.resolve(directory, entry.name);
  if (!file.startsWith(directory + path.sep))
    throw new Error("Invalid output path");
  await rm(file);
}
