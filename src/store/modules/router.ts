import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";

import { constantRoutes } from "~/router";

console.log(constantRoutes);

interface RouteState {
  route: RouteRecordRaw[];
  menu: menuItem[];
}

interface menuItem {
  label: string;
  key: string;
  icon: string;
  show: boolean;
  path: string;
  children?: menuItem[];
}

export const userRouterStore = defineStore("router", {
  state: (): RouteState => {
    return {
      route: [],
      menu: [
        {
          label: "首页",
          key: "home",
          icon: "home",
          show: true,
          path: "/home",
        },
        {
          label: "登录",
          key: "login",
          icon: "login",
          show: true,
          path: "/login",
          children: [],
        },
      ],
    };
  },
  actions: {
    setCollapsed(bool: Boolean) {
      this.collapsed = bool;
    },
  },
});
