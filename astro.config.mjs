// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	image: {
    domains: ["https://sun9-58.userapi.com", "https://sun9-38.userapi.com", "https://sun9-22.userapi.com", "https://sun9-21.userapi.com", "https://sun9-8.userapi.com", "https://sun9-46.userapi.com", "https://sun9-61.userapi.com", "https://sun9-77.userapi.com"],
  },
  site: "https://shaktima.ru",
  integrations: [icon(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});