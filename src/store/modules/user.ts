import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => {
    return {
      count: 1,
    };
  },
});
