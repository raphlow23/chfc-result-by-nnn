// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import chfcDataHandler from "./api/chfc-data.js";
import matchDetailHandler from "./api/match-detail.js";
import playerDetailHandler from "./api/player-detail.js";
import playerStatsHandler from "./api/player-stats.js";

function localApiPlugin() {
  return {
    name: "local-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestUrl = new URL(req.url || "", "http://localhost");
        const handlers = {
          "/api/chfc-data": chfcDataHandler,
          "/api/match-detail": matchDetailHandler,
          "/api/player-detail": playerDetailHandler,
          "/api/player-stats": playerStatsHandler
        };
        const handler = handlers[requestUrl.pathname];

        if (!handler) {
          next();
          return;
        }

        const query = Object.fromEntries(requestUrl.searchParams.entries());
        const apiResponse = {
          setHeader(name, value) {
            res.setHeader(name, value);
          },
          status(code) {
            res.statusCode = code;
            return this;
          },
          json(value) {
            if (!res.getHeader("Content-Type")) {
              res.setHeader("Content-Type", "application/json; charset=utf-8");
            }
            res.end(JSON.stringify(value));
          }
        };

        try {
          await handler({ query }, apiResponse);
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: error instanceof Error ? error.message : "Local API failed" }));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), localApiPlugin()]
});
