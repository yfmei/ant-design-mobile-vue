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
    component: () => import("@/components/demo/index"),
    meta: {
      title: "首页",
      icon: ""
    }
  },
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
  },
  {
    path: "/button",
    component: () => import("@/components/demo/button/ButtonDemo"),
    meta: {
      title: "按钮",
      icon: ""
    }
  },
  {
    path: "/touchFeedback",
    component: () => import("@/components/demo/lib/TouchFeedbackDemo"),
    meta: {
      title: "触摸反馈",
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
