// export const BASE_URL1 = "http://codercba.com:8888"; //http://codercba.com:8888  http://152.136.185.210:5000
export const TIME_OUT1 = 10000;
let BASE_URL1 = "";
if (import.meta.env.MODE === "production") {
  BASE_URL1 = "XXX";
} else {
  BASE_URL1 = "XXXXX";
}
export { BASE_URL1 };
