import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 要用到bootstrap的样式来搭建页面
// main.js
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件


// 全局绑定
import axios from 'axios'
// 地址
axios.defaults.baseURL = "https://www.escook.cn"
// 方法添加到Vue的原型
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
