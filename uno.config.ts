import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify({}), presetUno()],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
  },
  theme: {
    colors: {
      "bg-color": "var(--fu-bg-color)",
    },
  },
});
