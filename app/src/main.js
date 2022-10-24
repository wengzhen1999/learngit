import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'
import './assets/main.css'
//引入ui组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



//每个 Vue 应用都是通过 createApp 函数创建一个新的应用实例
const app=createApp(App);
app.use(ElementPlus);
//应用实例必须在调用了 .mount() 方法后才会渲染出来
app.mount('#app')