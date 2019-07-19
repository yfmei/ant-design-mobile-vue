# 自定义无限加载实现
### 原理
- 监听 window.scroll 事件, 当根节点 `<div id="app"></div>` 的高度超过可视区域的高度时开始判断是否需要加载数据
### 使用方法
- js 原生方法
```js
  import { scroll } from "@/utils/scroll"
  export default {
    mounted() {
      scroll(this.queryList)
    }
  }
```
- vue 自定义指定
```js
    // index.js
    import { scroll } from "@/utils/scroll"
    
    // 注册一个全局自定义指令 `v-scroll`
    Vue.directive("scroll", function (el, binding) {
      scroll(binding.value)
    })
```
```html
    <ul v-scroll="queryList">
      <li v-for="item in list">{{item.name}} {{item.id}}</li>
    </ul>
    
```
