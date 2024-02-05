//  关于路由跳转

import router from "~/router";

import type { RouteLocationRaw } from "vue-router";

import { isHttp } from "~/utils";

export function useRouterPush() {
  /***
   * 路由跳转
   * @param to - 需要跳转的路由
   * @param query - 跳转需要携带的参数
   * @param newOpen - 是否在新的浏览器Tab标签打开
   */

  function routerPush(to: RouteLocationRaw, query?: string, newOpen?: Boolean) {
    const pathHttp = isHttp(to as string);
    const queryParam = query ? query : {};

    if (pathHttp) {
      window.open(to as string, "_blank");
    } else {
      const toData = {
        path: to as string,
        query: queryParam,
      };
      if (newOpen) {
        const routerData = router.resolve(toData);
        window.open(routerData.href, "_blank");
        return Promise.resolve();
      } else {
        return router.push(toData);
      }
    }
  }

  return {
    routerPush,
  };
}
