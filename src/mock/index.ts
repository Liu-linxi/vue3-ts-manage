import Mock from "mockjs";
import mockUserTem from "./user";
const Random: Mock.MockjsRandom = Mock.Random;

// 生成 22 条数据
const MockDataArr = Mock.mock({
  "getUserListData|22": [mockUserTem(Random)],
});
// console.log(MockDataArr.userList);
// 输出结果
// console.log(JSON.stringify(MockDataArr.userList, null, 2));

export default MockDataArr;
