import { defineStore } from "pinia";

export const userSettingsStore = defineStore("settings", {
  state: () => {
    return {
      collapsed: false,
    };
  },
  actions: {
    setCollapsed(bool: Boolean) {
      this.collapsed = bool;
    },
  },
});
