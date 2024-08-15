import { createApp } from "vue";
import "normalize.css";
import "./assets/css/index.less";
// 正常引入.vue文件为什么没有报错呢,正常情况需要已经声明过,通过查找env.d.ts已经声明过TypeScript Vue Plugin (Volar)默认起作用
// 不确定是什么类型,相当于当成any类型,定义让其认为是一个组件来使用
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
