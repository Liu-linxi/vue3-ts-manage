// export const BASE_URL1 = "http://codercba.com:8888"; //http://codercba.com:8888  http://152.136.185.210:5000
export const TIME_OUT1 = 10000;
// 方法其一
let BASE_URL1 = "";
if (import.meta.env.MODE === "production") {
  BASE_URL1 = "XXX";
} else {
  BASE_URL1 = "XXXXX";
}

// 方法其二 // 使用.env文件
console.log(import.meta.env);

export { BASE_URL1 };
