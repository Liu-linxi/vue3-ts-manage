import Mock from "mockjs";

export default function mockUserTem(Random: Mock.MockjsRandom) {
  // 自定义生成手机号的函数
  function generatePhone() {
    const prefix = "1"; // 手机号以1开头
    const number = Random.integer(300000000, 999999999); // 随机生成后9位
    return prefix + number;
  }
  // 生成用户列表数据的模板
  const userTemplate = {
    id: "@increment",
    name: () => Random.cname(), // 随机中文名字
    realname: () => Random.cname(), // 随机中文名字
    cellphone: () => generatePhone(), // 随机手机号码
    enable: () => Random.integer(0, 1), // 随机 0 或 1
    createAt: () => Random.date("T"), // 随机日期
    updateAt: () => Random.date("T"), // 随机日期
    password: () => Random.string("lower", 8) + "." + Random.string("lower", 2), // 随机密码
    roleId: () => Random.integer(1, 2), // 随机 1 或 2,
    departmentId: () => Random.integer(1, 3), // 随机 1 或 2,
  };

  return userTemplate;
}
