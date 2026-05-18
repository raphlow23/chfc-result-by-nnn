import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import handler from "../api/chfc-data.js";

const season = process.env.CHFC_LIVE_SEASON || "2026";
const outputPath = resolve(`public/live/${season}.json`);

function runHandler(query) {
  return new Promise((resolveResult, rejectResult) => {
    const request = { query };
    const response = {
      statusCode: 200,
      headers: {},
      setHeader(name, value) {
        this.headers[name] = value;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        if (this.statusCode >= 400) {
          rejectResult(new Error(data?.error || `Request failed with ${this.statusCode}`));
          return;
        }
        resolveResult(data);
      }
    };

    Promise.resolve(handler(request, response)).catch(rejectResult);
  });
}

const data = await runHandler({ season, mode: "full" });
const payload = {
  ...data,
  meta: {
    season,
    source: "K League automatic sync",
    updatedAt: new Date().toISOString()
  }
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(`Synced ${season} live archive to ${outputPath}`);
