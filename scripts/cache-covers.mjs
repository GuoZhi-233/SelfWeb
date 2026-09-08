import { build } from "esbuild";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
await mkdir(".cache", { recursive: true });
await mkdir("public/covers", { recursive: true });
await build({
  entryPoints: ["src/data/projects.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: ".cache/projects.mjs",
});
const { PROJECT_DATA } = await import("../.cache/projects.mjs");
const mapping = {};
const pending = PROJECT_DATA.filter((p) => p.common.image);
const failures = [];
async function worker() {
  while (pending.length) {
    const p = pending.shift();
    try {
      const response = await fetch(p.common.image, {
        signal: AbortSignal.timeout(15000),
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      if (!response.ok) throw new Error(String(response.status));
      const type = response.headers.get("content-type") || "";
      if (!type.startsWith("image/")) throw new Error("Not an image");
      const bytes = Buffer.from(await response.arrayBuffer());
      const ext = type.includes("avif")
        ? "avif"
        : type.includes("webp")
          ? "webp"
          : type.includes("png")
            ? "png"
            : "jpg";
      const filename = `${p.id}.${ext}`;
      await writeFile(path.join("public/covers", filename), bytes);
      mapping[p.id] = `covers/${filename}`;
    } catch (e) {
      failures.push({ id: p.id, error: e.message });
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
await writeFile(
  "src/data/cover-cache.json",
  JSON.stringify(mapping, null, 2) + "\n",
);
console.log(JSON.stringify({ cached: Object.keys(mapping).length, failures }));
