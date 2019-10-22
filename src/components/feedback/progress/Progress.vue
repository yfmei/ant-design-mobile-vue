<template>
  <div :class="getProgressOuterClass" v-if="!isComplete">
    <div :class="getProgressClass" :style="getCustomStyle"></div>
  </div>
</template>

<script>
  import { classNames } from "@/components/utils/classNames"

  export default {
    name: "Progress",
    props: {
      percent: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: "fixed"
      },
      progressPrefixCls: {
        type: String,
        default: "am-progress"
      },
      color: {
        type: String,
        default: "#108ee9"
      },
      unfilled: {
        type: Boolean,
        default: true
      },
      appearTransition: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        width: 0,
        timer: null,
        isComplete: false,
        total: this.percent
      }
    },
    computed: {
      getProgressOuterClass() {
        let that = this
        return classNames(that.progressPrefixCls, [that.progressPrefixCls + "-outer"], {
          [that.progressPrefixCls + "-fixed-outer"]: that.position === "fixed",
          [that.progressPrefixCls + "-hide-outer"]: !that.unfilled
        })
      },
      getProgressClass() {
        let that = this
        return classNames(that.progressPrefixCls, that.progressPrefixCls + "-bar")
      },
      getCustomStyle() {
        let that = this

        return {
          backgroundColor: that.color,
          width: that.width + "%"
        }
      }
    },
    mounted() {
      let that = this
      // 未指定 percent, total 默认为 100
      if (!that.$options.propsData["percent"]) {
        that.total = 100
      }
      let step = that.total / 10

      console.debug(that.percent)
      console.debug(that.width)
      console.debug(that.total)

      // 是否需要过渡
      if (that.appearTransition) {
        that.timer = setInterval(() => {
          if (that.width === 100) {
            clearInterval(that.timer)
            that.isComplete = true
            return
          } else if (that.width === that.total) {
            clearInterval(that.timer)
            return
          }
          that.width += step
        }, 30)
      } else {
        that.width = that.total
      }

      document.onreadystatechange = () => {
        console.log("mounted:" + document.readyState)
        // clearInterval(that.timer)
      }
    }
  }
</script>

<style lang="scss">
  $progressPrefixClz: "am-progress";

  .#{$progressPrefixClz}{
    &-fixed-outer{
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 2000;
    }

    &-outer{
      display: block;
      background-color: #dddddd;
    }

    &-hide-outer{
      background-color: transparent;
    }

    &-bar{
      border: 1px solid $brand-primary;
      /*transition: all .3s linear 0s;*/
    }

  }

</style>
