<template>
  <div>
    <slot></slot>
  </div>
</template>

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
      that.originEl = that.$el.children[0]
      // 保存 slot 的 classNames
      that.originClassNames = that.originEl.className

      window.ontouchstart = () => {
        that.onTouchChange()
        that.changeClassName()
        that.changeStyle()
        console.log("touch start")
      }

      window.ontouchend = () => {
        that.onTouchChange()
        that.restoreClassName()
        that.restoreStyle()
        console.log("touch end")
      }
    }
  }
</script>

<style scoped>

</style>
