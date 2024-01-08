import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
});
