import { createRouter, createWebHistory } from "vue-router";

const Layouts = () => import("~/layouts/index.vue");

// createWebHashHistory
const routes = [
  {
    path: "/",
    component: Layouts,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("~/view/home.vue"),
        name: "home",
        meta: {
          title: "首页",
          svgIcon: "home",
          affix: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
