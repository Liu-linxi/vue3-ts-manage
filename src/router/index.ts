import { createRouter, createWebHashHistory } from "vue-router";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";

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
      name: "main",
      component: () => import("../views/main/main.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/error/404.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path === "/main" && !token) return "/login";
});

export default router;
