/**
 * @author PC
 * @date 2019/7/19
 */
import { generateReturnObj } from "@/utils/mock"
import { getListCallback } from "@/utils/mockRequest"

let pageData = generateReturnObj(100)

export function scroll(getList, data, callback) {
  if (data !== undefined) {
    pageData = Object.assign(data, {})
  }
  window.onscroll = () => {
    // 可滚动容器的高度
    let innerHeight = document.querySelector("#app").clientHeight
    // 屏幕尺寸高度
    let outerHeight = document.documentElement.clientHeight
    // 可滚动容器超出当前窗口显示范围的高度
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    let distance = 1 // 距离底部1就加载
    // scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
    console.log("可滚动高度: %s 滚动高度: %s 已滚动高度: %s", innerHeight, scrollTop, (outerHeight + scrollTop + distance))
    if ((innerHeight) < (outerHeight + scrollTop + distance)) {
      // 加载更多操作
      console.log("pageNo: %s hasNext: %s pageCount: %s", pageData.pageNo, pageData.hasNext, pageData.pageCount)
      if (pageData.hasNext) {
        pageData.pageNo += 1
        console.log("load more")
        // todo 在 innerHeight 附近加载动画
        if (callback === undefined) {
          getList(pageData, getListCallback)
        } else {
          getList(pageData, callback)
        }
      }
    }
  }
}
