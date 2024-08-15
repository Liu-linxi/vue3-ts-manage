import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  // 配置路由映射关系
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      component: () => import("../views/login/login.vue"),
    },
    {
      path: "/main",
      component: () => import("../views/main/main.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/not-found/404.vue"),
    },
  ],
});

export default router;
