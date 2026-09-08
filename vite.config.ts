import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "SITE_");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    base:
      env.SITE_BASE ||
      (process.env.NODE_ENV === "production" ? "/SelfWeb/" : "/"),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
