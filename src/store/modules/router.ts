import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { constantRoutes } from "~/router";

console.log(constantRoutes);

const m = [
  {
    label: "一级菜单",
    key: "one",
    icon: "home",
    show: true,
    path: "/one",
    comNmae: "one",
    pagePath: "basic",
    keepAlive: false,
    noewOpen: false,
    query: "",
    children: [
      {
        label: "二级菜单",
        key: "two",
        icon: "home",
        show: true,
        path: "/one/two",
        comNmae: "two",
        pagePath: "one/two",
        keepAlive: false,
        noewOpen: false,
        children: [
          {
            label: "三级菜单",
            key: "three",
            icon: "home",
            show: true,
            path: "/one/two/three",
            comNmae: "three",
            pagePath: "one/two/three",
            keepAlive: false,
            noewOpen: false,
            children: [],
          },
        ],
      },
    ],
  },
];

interface RouteState {
  route: RouteRecordRaw[];
  menu: MenuItem[];
}

export const useRouterStore = defineStore("router", {
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
          children: [],
        },
        ...m,
      ],
    };
  },
  actions: {
    setCollapsed(bool: Boolean) {
      this.collapsed = bool;
    },
    async getRouter() {
      const router = await filterAsyncRouter(m);
      return router;
    },
  },
});

function filterAsyncRouter(data) {
  console.log(data);

  return data;
}
