import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify({}), presetUno()],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "flex-1-hidden": "flex-1 overflow-hidden",
  },
  rules: [
    // [/^aside-(\d+)$/,s => ({width: `var(--fu-aside-${s})`})],
    ["aside-w", { width: `var(--fu-aside-w)` }],
    ["aside-w-min", { width: `var(--fu-aside-w-min)` }],
    ["p-aside-w", { "padding-left": "var(--fu-aside-w)" }],
    ["p-aside-w-min", { "padding-left": "var(--fu-aside-w-min)" }],
    ["main-h", { height: "var(--fu-main-h)" }],
    ["theme-bg", { "background-color": "var(--fu-bg-color)" }],
    ["theme-text", { color: "var(--fu-text-color)" }],
  ],
  theme: {
    "bg-color": "var(--fu-bg-color)",
  },
});
