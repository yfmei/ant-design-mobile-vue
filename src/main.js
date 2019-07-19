import Vue from "vue"
import App from "./App.vue"
import router from "@/router/router"
import store from "@/store"

import { scroll } from "@/utils/scroll"

// 注册一个全局自定义指令 `v-scroll`
Vue.directive("scroll", function (el, binding) {
  scroll(binding.value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
