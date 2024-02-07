import { defineStore } from "pinia";

// console.log(defaultSettings);

interface tbasStore {
  tabs: tabItem[];
}

export const useTabsStore = defineStore("tabs", {
  state: (): tbasStore => {
    return {
      tabs: [
        {
          label: "首页",
          path: "home",
          icon: "home",
        },
        {
          label: "首页",
          path: "home",
          icon: "home",
        },
      ],
    };
  },
  actions: {
    addTabs(tab: tabItem) {
      console.log(tab, "tab");
    },
  },
});
