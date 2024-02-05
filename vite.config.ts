import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

import { resolve } from "path";

export default defineConfig({
  base: "/",
  server: {
    open: true,
  },
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
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icon/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    // dynamicImportVars()
  ],
});
