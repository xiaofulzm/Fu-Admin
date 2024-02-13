import { defineStore } from "pinia";

import { useRouterPush } from "~/composables";
const { routerPush } = useRouterPush();
// console.log(defaultSettings);

interface tbasStore {
  tabs: TabItem[];
  fixedTabs: string[];
  activeTab: string;
}

export const useTabsStore = defineStore("tabs", {
  state: (): tbasStore => {
    return {
      fixedTabs: ["/home"],
      tabs: [
        {
          label: "首页",
          path: "/home",
          icon: "home",
        },
      ],
      activeTab: "",
    };
  },
  actions: {
    // 添加tab
    addTab(tab: TabItem) {
      this.activeTab = tab.path;
      const target = this.tabs.some((item) => item.path === tab.path);
      if (!target) {
        this.tabs.push(tab);
      }
    },
    // 删除tab
    removeTab(i) {
      if (this.activeTab === this.tabs[i].path) {
        if (i + 1 === this.tabs.length) {
          routerPush(this.tabs[i - 1].path);
        } else {
          routerPush(this.tabs[i + 1].path);
        }
      }
      this.tabs.splice(i, 1);
    },
  },
});
