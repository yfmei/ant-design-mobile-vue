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
    path: "/scroll",
    component: () => import("@/components/DirectiveScroll"),
    meta: {
      title: "指令-无限下拉",
      icon: ""
    }
  },
  {
    path: "/flex",
    component: () => import("@/components/demo/layout/FlexDemo"),
    meta: {
      title: "flex布局",
      icon: ""
    }
  },
  {
    path: "/whitespace",
    component: () => import("@/components/demo/layout/WhiteSpaceDemo"),
    meta: {
      title: "空白行",
      icon: ""
    }
  },
  {
    path: "/wingblank",
    component: () => import("@/components/demo/layout/WingBlankDemo"),
    meta: {
      title: "左右留白",
      icon: ""
    }
  },
  {
    path: "/border",
    component: () => import("@/components/demo/border/BorderDemo"),
    meta: {
      title: "边框",
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
