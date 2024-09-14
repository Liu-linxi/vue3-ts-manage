import router, { addRoutesWithMenu } from "@/router";
import { defineStore } from "pinia";
import type { IAcount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import { menus } from "@/mock/menu";
import { mapMenuToRoutes } from "@/utils/map-menu";

interface ILoginState {
  token: string;
  menuActive: string;
  userInfo: any;
  userMenus: any[];
  permissions: string[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
    menuActive: "",
    userInfo: {},
    userMenus: [],
    permissions: [],
  }),
  actions: {
    async accountLoginAction(account: IAcount) {
      // 1.保存在cache中
      localCache.setCache(LOGIN_TOKEN, "ceshi1baocun1token");
      // 2.如果有后续接口权限角色和菜单列表可以继续追加后面进行缓存后续取用数据在mock.js模拟部分
      const role = localCache.getCache("role");
      // 模拟角色登录后显示菜单数据
      this.userMenus = role == 1 ? menus : menus.splice(2, menus.length);
      localCache.setCache("userMenus", this.userMenus);

      const routes = mapMenuToRoutes(this.userMenus);
      routes.forEach((route) => router.addRoute("main", route));

      // 跳转到首页
      router.push("/main");
    },
    loadLocalDataAction() {
      this.token = localCache.getCache(LOGIN_TOKEN);
      this.userMenus = localCache.getCache("userMenus");

      if (this.token && this.userMenus) {
        addRoutesWithMenu(this.userMenus); // 获取所有的数据
      }
    },
  },
});

export default useLoginStore;
