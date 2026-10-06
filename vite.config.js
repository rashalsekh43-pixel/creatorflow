import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = readdirSync(import.meta.dirname)
  .filter((file) => file.endsWith(".html"))
  .map((file) => resolve(import.meta.dirname, file));

export default defineConfig({
  build: {
    rollupOptions: {
      input: pages,
    },
  },
});
