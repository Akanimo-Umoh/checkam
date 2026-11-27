import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  resolve: {
    // Same "@/..." imports as the app (tsconfig paths: "@/*" -> "./*")
    alias: { "@": fileURLToPath(new URL(".", import.meta.url)) },
  },
  test: {
    environment: "node", // lib/ code is plain logic, no browser needed
    include: ["**/*.test.ts"],
    exclude: ["node_modules", ".next"],
  },
})
