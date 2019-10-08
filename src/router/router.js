/**
 * @author PC
 * @date 2019/7/19
 */
import Vue from "vue"
import Router from "vue-router"
import scroll from "@/router/scroll"

Vue.use(Router)

let routerMap = [
  {
    path: "/",
    component: () => import("@/components/DirectiveScroll"),
    meta: {
      title: "指令-无限下拉",
      icon: ""
    }
  }
]
let routes = routerMap.concat(scroll)

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
})

export default router