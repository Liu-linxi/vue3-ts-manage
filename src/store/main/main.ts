import MockDataArr from "@/mock";
import { defineStore } from "pinia";

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
      // const menuResult = await getMenuData();

      // this.entireDepartments = departmentResult.data.list;
      this.entireRoles = roleResult;
      // this.entireMenus = menuResult.data.list;
    },
  },
});

export default useMainStore;
