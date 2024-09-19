import Mock from "mockjs";

export default function mockRole(Random: Mock.MockjsRandom) {
  // 生成角色列表数据的模板
  const roleTemplate = {
    id: "@increment",
    name: () => Random.pick(["超级管理员", "管理员"]), // 随机选择角色
    intro: () => Random.pick(["所有权限", "角色管理", "部门管理", "人员管理"]), // 随机选择角色
    createAt: () => Random.date("T"), // 随机日期
    updateAt: () => Random.date("T"), // 随机日期
  };

  return roleTemplate;
}
