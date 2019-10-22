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

      console.debug("appearTransition: " + that.appearTransition)

      if (that.appearTransition) {
        console.debug("需要过渡效果")
        let finished = 100
        if (!that.$options.propsData["percent"]) {
          console.debug("未指定 percent, 但需要过渡效果时 total 默认为 100")
          that.total = finished
        }
        // 间隔
        let interval = 30
        // 步长
        let step = that.total / 10
        console.debug("开始过渡，步长: %o, 间隔: %o", step, interval)
        that.timer = setInterval(() => {
          if (that.width === that.total) {
            console.debug("过渡结束, 停止定时器")
            clearInterval(that.timer)
            if (that.total === finished) {
              console.debug("过渡结束, 停止定时器并隐藏进度条")
              that.isComplete = true
            }
          } else {
            that.width += step
          }
        }, interval)
      } else {
        console.debug("不需要过渡效果")
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
