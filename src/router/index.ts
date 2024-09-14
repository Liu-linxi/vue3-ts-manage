import { createRouter, createWebHashHistory } from "vue-router";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import { firstRoute, mapMenuToRoutes } from "@/utils/map-menu";

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

export function addRoutesWithMenu(menus: any) {
  // 1.获取匹配到的所有的路由
  const routes = mapMenuToRoutes(menus);

  // 2.动态添加到router中
  for (const route of routes) {
    router.addRoute("main", route);
  }
}

// router.beforeEach((to, from) => {
//   const token = localCache.getCache(LOGIN_TOKEN);
//   if (to.path === "/main" && !token) return "/login";
// });

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }
  if (to.path === "/login" && token) {
    return "/main";
  }
  if (to.path === "/main" && firstRoute) {
    return firstRoute.path;
  }
});

export default router;
