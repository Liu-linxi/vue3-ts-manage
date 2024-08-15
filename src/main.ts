import { createApp } from "vue";
// 正常引入.vue文件为什么没有报错呢,正常情况需要已经声明过,通过查找env.d.ts已经声明过TypeScript Vue Plugin (Volar)默认起作用
// 不确定是什么类型,相当于当成any类型,定义让其认为是一个组件来使用
import App from "./App.vue";

createApp(App).mount("#app");
