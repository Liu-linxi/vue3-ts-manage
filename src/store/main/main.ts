import MockDataArr from "@/mock";
import { defineStore } from "pinia";

import menus from "@/mock/menu";
interface IMainState {
  entireDepartments: any[];
  entireRoles: any[];
  entireMenus: any[];
}

const useMainStore = defineStore("main", {
  state: (): IMainState => ({
    entireDepartments: [],
    entireRoles: [],
    entireMenus: [],
  }),
  actions: {
    async fetchEntireDataAction() {
      // const departmentResult = await getDepartmentData({ offset: 0, size: 100 });
      const roleResult = MockDataArr.role;

      // this.entireDepartments = departmentResult.data.list;
      this.entireRoles = roleResult;
      this.entireMenus = menus;
    },
  },
});

export default useMainStore;
