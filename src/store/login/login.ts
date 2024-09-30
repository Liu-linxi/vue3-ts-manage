import router, { addRoutesWithMenu } from "@/router";
import { defineStore } from "pinia";
import type { IAcount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import menus from "@/mock/menu";
import useMainStore from "../main/main";

interface ILoginState {
  token: string;
  menuActive: string;
  userInfo: any;
  userMenus: any[];
  permissions: string[];
  power: string[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
    menuActive: "", //已经废弃使用
    userInfo: {},
    userMenus: [],
    permissions: [], //权限暂时模拟所有
    power: ["create", "delete", "update", "query"],
  }),
  actions: {
    async accountLoginAction(account: IAcount) {
      console.log("🚀 ~ accountLoginAction ~ account:", account);

      // 1.保存在cache中
      localCache.setCache(LOGIN_TOKEN, "ceshi1baocun1token");
      // 2.如果有后续接口权限角色和菜单列表可以继续追加后面进行缓存后续取用数据在mock.js模拟部分
      const role = localCache.getCache("role");
      // 3.模拟角色登录后显示菜单数据
      this.userMenus = role == 2 ? menus.slice(2) : menus;
      localCache.setCache("userMenus", this.userMenus);
      // 4.模拟分配权限
      if (role !== 2) {
        const roleArr: string[] = ["department", "role", "menu"];
        let arrAll: string[] = [];
        for (let index = 0; index < roleArr.length; index++) {
          arrAll = [...arrAll, ...this.power.map((item) => roleArr[index] + ":" + item)];
        }
        this.permissions = arrAll;
        localCache.setCache("permissions", this.permissions);
      }
      // 5.获取所有的数据
      const mainStore = useMainStore();
      mainStore.fetchEntireDataAction();

      addRoutesWithMenu(this.userMenus);
      // 跳转到首页
      router.push("/main");
    },
    loadLocalDataAction() {
      this.token = localCache.getCache(LOGIN_TOKEN);
      this.userMenus = localCache.getCache("userMenus");
      this.permissions = localCache.getCache("permissions");

      if (this.token && this.userMenus) {
        addRoutesWithMenu(this.userMenus); // 获取所有的数据
        const mainStore = useMainStore();
        mainStore.fetchEntireDataAction();
      }
    },
  },
});

export default useLoginStore;
