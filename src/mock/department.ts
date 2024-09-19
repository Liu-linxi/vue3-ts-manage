import Mock from "mockjs";

export default function mockDept(Random: Mock.MockjsRandom) {
  // 生成用户列表数据的模板
  const departmentTemplate = {
    id: "@increment",
    name: () => Random.ctitle(3, 5), // 随机中文名字
    parentId: () => (Math.random() < 0.5 ? Random.integer(1, 3) : null), // 随机 1 到 3 或 null
    createAt: () => Random.date("T"), // 随机日期
    updateAt: () => Random.date("T"), // 随机日期
    leader: () => Random.cname(), // 随机 1 或 2,
  };

  return departmentTemplate;
}
