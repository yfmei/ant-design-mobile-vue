/**
 * @author PC
 * @date 2019/7/20
 */
export default [
  {
    path: "/directive",
    component: () => import("@/components/DirectiveScroll"),
    meta: {
      title: "指令-无限下拉",
      icon: ""
    }
  },
  {
    path: "/mount",
    component: () => import("@/components/MountedScroll"),
    meta: {
      title: "Mount-无限下拉",
      icon: ""
    }
  }
]

