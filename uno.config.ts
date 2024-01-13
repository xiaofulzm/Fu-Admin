import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify({}), presetUno()],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "flex-1-hidden": "flex-1 overflow-hidden",
  },
  theme: {
    colors: {
      "bg-color": "var(--fu-bg-color)",
    },
  },
});
