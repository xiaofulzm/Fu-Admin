import { createRouter, createWebHistory } from "vue-router";
// createWebHashHistory
const routes = [
    {
        path: "/home",
        component: () => import("../view/home.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
