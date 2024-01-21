import router from "~/router";
import { useRouterStore } from "~/store";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const isToken = true;
router.beforeEach(async (to, from, next) => {
  const routerStore = useRouterStore();
  NProgress.start();
  if (isToken) {
    const route = await routerStore.getRouter();
    console.log("路由加载完成", route);

    next();
  } else {
    next("/login");
  }
});

router.afterEach(() => {
  NProgress.done();
});
