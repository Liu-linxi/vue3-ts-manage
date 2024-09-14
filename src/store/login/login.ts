import router from "@/router";
import { defineStore } from "pinia";
import type { IAcount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";

interface ILoginState {
  token: string;
  userInfo: any;
  userMenus: any[];
  permissions: string[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
    userInfo: {},
    userMenus: [],
    permissions: [],
  }),
  actions: {
    async accountLoginAction(account: IAcount) {
      // 1.保存在cache中
      localCache.setCache(LOGIN_TOKEN, "ceshi1baocun1token");
      console.log("🚀 ~ accountLoginAction ~ account:", account);
      // 2.如果有后续接口权限角色和菜单列表可以继续追加后面进行缓存后续取用数据在mock.js模拟部分

      // 跳转到首页
      router.push("/main");
    },
  },
});

export default useLoginStore;
