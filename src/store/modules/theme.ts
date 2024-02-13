import { defineStore } from "pinia";

import { defaultSettings } from "~/config";
import type { LayoutSettings } from "~/config";

// console.log(defaultSettings);

interface ThemeStore {
  theme: LayoutSettings["themeMode"];
}

export const useThemeStore = defineStore("theme", {
  state: (): ThemeStore => {
    return {
      theme: defaultSettings.themeMode,
    };
  },
  actions: {
    setTheme(mode: LayoutSettings["themeMode"]) {
      this.theme = mode;
    },
  },
});
