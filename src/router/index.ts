import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Layouts = () => import("~/layouts/index.vue");

// createWebHashHistory
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layouts,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("~/view/home/index.vue"),
        name: "home",
        meta: {
          title: "首页",
          icon: "home",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("~/view/login/index.vue"),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
