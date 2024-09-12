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
      // 2.保存在cache中
      localCache.setCache(LOGIN_TOKEN, "ceshi1baocun1token");
      console.log("🚀 ~ accountLoginAction ~ account:", account);
      // 跳转到首页
      router.push("/main");
    },
  },
});

export default useLoginStore;
