// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/variables" as *; @use "/src/styles/mixins" as *;`,
        },
      },
    },
  },

  integrations: [react()],
});