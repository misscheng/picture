// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Promise from 'promise-polyfill'

//引入axios  by zhengkai.blog.csdn.net
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //自动附加在所有axios请求前面，则可以省略/api，直接写'/xxxx/xxx'。否则需要设置'/api/xxxx/xxx'


// To add to window
if (!window.Promise) {
    window.Promise = Promise
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
