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
import "element-plus/dist/index.css";
// app.use(ElementPlus);

// 按需引入
// import { ElButton } from "element-plus";
// app.component(ElButton.name, ElButton);

// 引入图标
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }
// 组件优化图标引入
import registerIcons from "@/global/register-icons";

const app = createApp(App);

app.use(registerIcons);
// 这里顺序先加载存储后加载路由避免刷新后显示404
app.use(pinia);
app.use(router);
app.mount("#app");

console.log("🚀 ~ 测试git提交消息规范");
