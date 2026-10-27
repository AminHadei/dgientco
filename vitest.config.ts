import { defineConfig } from "vitest/config";
import { defineVitestProject } from "@nuxt/test-utils/config";

const nuxt = await defineVitestProject({
  test: {
    name: "nuxt",
    include: ["tests/nuxt/**/*.test.ts"],
    environment: "nuxt",
  },
});

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          environment: "node",
          include: ["tests/unit/**/*.test.ts"],
        },
      },
      nuxt,
    ],
  },
});
