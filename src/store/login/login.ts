import router from "@/router";
import { defineStore } from "pinia";
import type { IAcount } from "@/types";
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
      console.log("🚀 ~ accountLoginAction ~ account:", account);
      // 跳转到首页
      router.push("/main");
    },
  },
});

export default useLoginStore;
