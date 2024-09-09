import { createApp } from "vue";
import "normalize.css";
import "./assets/css/index.less";
// 正常引入.vue文件为什么没有报错呢,正常情况需要已经声明过,通过查找env.d.ts已经声明过TypeScript Vue Plugin (Volar)默认起作用
// 不确定是什么类型,相当于当成any类型,定义让其认为是一个组件来使用
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

// 全局注册:方便简洁,但是全局引入是一起打包,打包会更大
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// app.use(ElementPlus);

const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount("#app");
