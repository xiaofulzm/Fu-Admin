import router from "~/router";
import { useRouterStore, useTabsStore } from "~/store";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const isToken = true;
router.beforeEach(async (to, from, next) => {
  const routerStore = useRouterStore();
  NProgress.start();
  if (isToken) {
    if (routerStore.route.length === 0) {
      const route = await routerStore.getRouter();
      // console.log("路由加载完成", router);
      route.forEach((item) => {
        router.addRoute(item);
      });
      next({ ...to, replace: true });
    } else {
      next();
    }
  } else {
    next("/login");
  }
});

router.afterEach((to) => {
  const { addTab } = useTabsStore();
  // console.log("路由加载完成", router);
  addTab({
    label: to.meta.title as string,
    icon: to.meta.icon as string,
    path: to.path,
  });
  NProgress.done();
});
