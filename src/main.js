import Vue from 'vue'
import App from './App.vue'

//打印终端的构筑信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
