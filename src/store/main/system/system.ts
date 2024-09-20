import MockDataArr from "@/mock";
import { defineStore } from "pinia";
import type { ISystemState, IUser } from "./type";

const useSystemStore = defineStore("system", {
  state: (): ISystemState => ({
    usersTotalCount: 0,
    usersList: [],
    pageList: [],
    pageTotalCount: 0,
  }),
  actions: {
    async getUserListDataAction(queryInfo: any) {
      // 搜索参数可以自行扩展
      const startIndex = parseInt(queryInfo.offset);
      const endIndex = startIndex + parseInt(queryInfo.size);
      // 1.请求用户列表数据
      const userListResult = MockDataArr.getUserListData;
      this.usersList = userListResult.slice(startIndex, endIndex);
      this.usersTotalCount = userListResult.length;
    },
    async newUserDataAction(userInfo: any) {
      // 1.创建用户数据
      const tiemr = Date.now();
      MockDataArr.getUserListData.unshift({
        ...userInfo,
        updateAt: tiemr,
        createAt: tiemr,
        id: ++MockDataArr.getUserListData[MockDataArr.getUserListData.length - 1].id,
      });
      // 2.请求新的数据
      this.getUserListDataAction({ offset: 0, size: 10 });
    },
    async deleteUserDataAction(id: number) {
      const index = MockDataArr.getUserListData.findIndex((item: IUser) => item.id === id);
      MockDataArr.getUserListData.splice(index, 1);
      this.getUserListDataAction({ offset: 0, size: 10 });
    },
    async editUserDataAction(id: number, userInfo: any) {
      const index = MockDataArr.getUserListData.findIndex((item: IUser) => item.id === id);
      MockDataArr.getUserListData[index] = {
        ...MockDataArr.getUserListData[index],
        ...userInfo,
        updateAt: Date.now(),
      };
      this.getUserListDataAction({ offset: 0, size: 10 });
    },

    // 部分的模拟数据对接
    async getPageListDataAction(pageName: string, queryInfo: any) {
      // 搜索参数可以自行扩展
      const startIndex = parseInt(queryInfo.offset);
      const endIndex = startIndex + parseInt(queryInfo.size);
      // 1.请求用户列表数据
      const mockDeptResult = MockDataArr[pageName];
      console.log("🚀 ~ getPageListDataAction ~ MockDataArr:", MockDataArr);
      this.pageList = mockDeptResult.slice(startIndex, endIndex);
      this.pageTotalCount = mockDeptResult.length;
    },
    async deletePageDataAction(pageName: string, id: number) {
      const index = MockDataArr[pageName].findIndex((item: any) => item.id === id);
      MockDataArr[pageName].splice(index, 1);
      this.getPageListDataAction(pageName, { offset: 0, size: 10 });
    },
    async newPageDataAction(pageName: string, pageData: any) {
      // 1.创建用户数据
      const tiemr = Date.now();
      MockDataArr[pageName].unshift({
        ...pageData,
        updateAt: tiemr,
        createAt: tiemr,
        id: ++MockDataArr[pageName][MockDataArr[pageName].length - 1].id,
      });
      this.getPageListDataAction(pageName, { offset: 0, size: 10 });
    },
    async editPageDataAction(pageName: string, id: number, pageData: any) {
      const index = MockDataArr[pageName].findIndex((item: IUser) => item.id === id);
      MockDataArr[pageName][index] = {
        ...MockDataArr[pageName][index],
        ...pageData,
        updateAt: Date.now(),
      };
      this.getPageListDataAction(pageName, { offset: 0, size: 10 });
    },
  },
});

export default useSystemStore;
