import Mock from "mockjs";
const Random: Mock.MockjsRandom = Mock.Random;
import mockUserTem from "./user";
import mockDept from "./department";
import mockRole from "./role";

// 生成 22 条数据
const MockDataArr = Mock.mock({
  "getUserListData|22": [mockUserTem(Random)],
  "department|22": [mockDept(Random)],
  "role|23": [mockRole(Random)],
});
// console.log(MockDataArr.userList);
// 输出结果
// console.log(JSON.stringify(MockDataArr.userList, null, 2));

export default MockDataArr;
