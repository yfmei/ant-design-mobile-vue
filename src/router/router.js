/**
 * @author PC
 * @date 2019/7/19
 */
import Vue from "vue"
import Router from "vue-router"
import scroll from "@/router/scroll"
import Demo from "@/components/layout/Demo"

Vue.use(Router)

// 一级路由必须要 / 开头
// 二级路由不需要
let routerMap = [
  {
    path: "",
    name: "home",
    component: () => import("@/components/demo/index"),
    meta: {
      title: "首页",
      icon: ""
    }
  },
  {
    path: "/scroll",
    name: "scroll",
    component: () => import("@/components/DirectiveScroll"),
    meta: {
      title: "指令-无限下拉",
      icon: ""
    }
  },
  getFullPath("layout",
    {
      path: "flex",
      name: "flex",
      component: () => import("@/components/demo/layout/FlexDemo"),
      meta: {
        title: "flex布局",
        icon: ""
      }
    },
    {
      path: "whitespace",
      name: "whitespace",
      component: () => import("@/components/demo/layout/WhiteSpaceDemo"),
      meta: {
        title: "空白行",
        icon: ""
      }
    },
    {
      path: "wingblank",
      name: "wingblank",
      component: () => import("@/components/demo/layout/WingBlankDemo"),
      meta: {
        title: "左右留白",
        icon: ""
      }
    }
  ),
  {
    path: "/border",
    name: "border",
    component: () => import("@/components/demo/border/BorderDemo"),
    meta: {
      title: "边框",
      icon: ""
    }
  },
  getFullPath("dataEntry",
    {
      path: "button",
      name: "button",
      component: () => import("@/components/demo/button/ButtonDemo"),
      meta: {
        title: "按钮",
        icon: ""
      }
    }
  ),
  {
    path: "touchFeedback",
    name: "touchFeedback",
    component: () => import("@/components/demo/lib/TouchFeedbackDemo"),
    meta: {
      title: "触摸反馈",
      icon: ""
    }
  }
]

/**
 * 封装二级路由
 * @param parent
 * @param childPath
 * @returns {{path: string, component: *, children: *}}
 */
function getFullPath(parent, ...childPath) {
  return {
    path: "/" + parent,
    name: parent,
    component: Demo,
    children: childPath
  }
}

let routes = routerMap.concat(scroll)

console.log(routes)

let router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: routes
})

export default router
