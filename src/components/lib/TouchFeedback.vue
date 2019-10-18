
<script>
  export default {
    name: "TouchFeedback",
    props: {
      disabled: {
        default: false
      },
      activeClassName: {
        type: String,
        default: ""
      },
      activeStyle: {

      }
    },
    render() {
      // 在默认的 <template> 中, 根节点不能是独立的 <slot>(因为 slot 可能包含多个节点)
      // 而我们又不希望 slot 存在父节点, 所以这里使用 render() 方法生成无渲染组件
      // 无渲染组件结构
      return this.$scopedSlots.default()
    },
    data() {
      return {
        isTouch: false,
        originEl: {}, // slot 最外层的 dom 对象
        originClassNames: "", // slot 最外层的 dom 对象的 className
        originStyle: {} // slot 最外层的 dom 对象的 style
      }
    },
    methods: {
      onTouchChange() {
        this.isTouch = !this.isTouch
      },
      changeClassName() {
        let that = this
        that.originEl.className = that.originClassNames + " " + that.activeClassName
      },
      restoreClassName() {
        let that = this
        that.originEl.className = that.originClassNames
      },
      changeStyle() {
        let that = this
        for (let styleName in that.activeStyle) {
          // 保存 slot 的 style
          that.originStyle[styleName] = that.originEl.style[styleName]
          // 覆盖 slot 的style
          that.originEl.style[styleName] = that.activeStyle[styleName]
        }
      },
      restoreStyle() {
        let that = this
        for (let styleName in that.activeStyle) {
          that.originEl.style[styleName] = that.originStyle[styleName]
        }
      }
    },
    mounted() {
      let that = this
      console.log(that.disabled)

      that.originEl = that.$el
      // 保存 slot 的 classNames
      that.originClassNames = that.originEl.className

      that.originEl.ontouchstart = (ev) => {
        console.log("touch start %o", ev)
        that.onTouchChange()
        if (that.disabled) {
          return
        }
        that.changeClassName()
        that.changeStyle()
        console.log()
      }

      that.originEl.ontouchend = (ev) => {
        console.log("touch end %o", ev)

        that.onTouchChange()
        if (that.disabled) {
          return
        }
        that.restoreClassName()
        that.restoreStyle()
      }

      that.originEl.onclick = (ev) => {
        console.log("touch click %o", ev)
      }

      that.originEl.oncontextmenu = (ev) => {
        console.log("oncontextmenu %o", ev)
        // 禁止长按弹出菜单
        ev.preventDefault()
      }
    }
  }
</script>

<style scoped>

</style>
