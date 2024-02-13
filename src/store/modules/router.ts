import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { transformRouteToMenu } from "~/utils";

import Layouts from "~/layouts/index.vue";

import { routerArr, menuArr } from "~/mock/router";

const viewPage = import.meta.glob("~/view/**/*.vue");

interface RouteState {
  route: RouteRecordRaw[];
  menu: MenuItem[];
}

export const useRouterStore = defineStore("router", {
  state: (): RouteState => {
    return {
      route: [],
      menu: [],
    };
  },
  actions: {
    setCollapsed(bool: Boolean) {
      this.collapsed = bool;
    },
    setMenu() {
      const arr = [
        {
          label: "首页",
          key: "/home",
          icon: "home",
          show: true,
          path: "/home",
          children: [],
        },
      ];
      return arr;
    },
    async getRouter() {
      const { route, menu } = await filterAsyncRouter(routerArr);
      this.route = route;
      this.menu = menu;
      return route;
    },
  },
});

function filterAsyncRouter(data) {
  function routeFn(data) {
    if (data.length === 0) return [];
    return data.map((item) => {
      if (item?.children.length > 0) {
        if (item.pagePath === "basic") {
          // console.log('basic')
          item.component = Layouts;
        }
        item.children = routeFn(item.children);
      } else {
        item.component = loadView(item.pagePath);
      }
      // console.log(item,'item')
      return filterRoute(item);
    });
  }

  const route = routeFn(data);
  const menu = transformRouteToMenu(menuArr);

  return { route, menu };
}

interface RouteItem {
  path: string;
  name: string;
  meta?: RouteMeta;
  component: () => Promise<typeof import("*.vue")>;
  children?: RouteItem[];
}

interface RouteMeta {
  icon: string;
  title: string;
  query: string;
  newOpen: boolean;
  keepAlive: boolean;
}

function filterRoute(data) {
  // console.log(data)
  const newItem: RouteItem = {
    path: data.path,
    name: data.comName,
    component: data.component,
    meta: {
      icon: data.icon,
      title: data.label,
      query: data.query,
      newOpen: data.newOpen,
      keepAlive: data.keepAlive,
    },
  };
  if (data?.children.length > 0) {
    newItem.children = data.children;
  }
  return newItem;
}
function loadView(pagrPath: string) {
  const path = `/src/view/${pagrPath}/index.vue`;
  return viewPage[path];
}
