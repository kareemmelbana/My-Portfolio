import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
    }),
    // على Vercel نستخدم preset الخاص بها صراحةً، ومحلياً/باقي المنصات يبقى الافتراضي
    nitro(
      process.env.VERCEL
        ? { preset: "vercel" }
        : { defaultPreset: "cloudflare-module" },
    ),
    viteReact(),
  ],
});
