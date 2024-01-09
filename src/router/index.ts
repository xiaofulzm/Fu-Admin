import { createRouter, createWebHistory } from "vue-router";

const Layouts = () => import("~/layouts/index.vue");

// createWebHashHistory
export const constantRoutes = [
  {
    path: "/",
    component: Layouts,
    redirect: "/home",
    children: [
      {
        path: "home",
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
    name: "login",
    component: () => import("~/view/login/index.vue"),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
