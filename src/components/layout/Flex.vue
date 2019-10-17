<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>

<script>
  import { classNames } from "@/components/utils/classNames"

  export default {
    name: "Flex",
    props: {
      // 主轴排列方向
      // row
      // row-reverse
      // column
      // column-reverse
      direction: {
        type: String
      },
      // 子容器宽度超过父容器时如何换行
      // nowrap: 不换行
      // wrap: 换行
      // wrap-reverse： 从下到上换行
      wrap: {
        type: String
      },
      // direction 和 wrap 的缩写 "row nowrap", data() 中的顺序决定优先级
      flow: {
        type: String
      },
      // 设置子容器沿主轴排列
      // center: 居中
      // flex-start: 左对齐
      // flex-end: 右对齐
      // space-around: 每个子容器之间的间隔相同, 因此项目之间的间距比子容器与父容器边框的间距大一倍
      // space-between: 首尾两个子容器紧贴父容器, 子容器间隔相同
      justify: {
        type: String
      },
      // 设置子容器沿交叉轴排列
      // center: 居中
      // flex-start: 上对齐
      // flex-end: 下对齐
      // baseline: start -> end 方向的首行文字为基线对齐
      // stretch: 拉伸占满整个容器
      align: {
        type: String,
        default: "center"
      },
      alignContent: {
        type: String
      }
    },
    data() {
      return {
        prefixCls: "am-flexbox"
      }
    },
    computed: {
      getClass() {
        let that = this
        return classNames(that.prefixCls, that.className,
                          {
                            [that.prefixCls + "-dir-" + that.direction]: that.direction,
                            [that.prefixCls + "-" + that.wrap]: that.wrap,
                            [that.prefixCls + "-justify-" + that.justify]: that.justify,
                            [that.prefixCls + "-align-" + that.align]: that.align,
                            [that.prefixCls + "-align-content-" + that.alignContent]: that.alignContent
                          }
        )
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">

  $flexPrefixClz: am-flexbox;

  .#{$flexPrefixClz}{
    display: flex;

    &-dir-row {
      flex-direction: row;
    }
    &-dir-row-reverse {
      flex-direction: row-reverse;
    }
    &-dir-column {
      flex-direction: column;
    }
    &-dir-column-reverse {
      flex-direction: column-reverse;
    }

    &-nowrap {
      flex-wrap: nowrap;
    }
    &-wrap {
      flex-wrap: wrap;
    }
    &-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    &-justify-start{
      justify-content: start;
    }
    &-justify-end{
      justify-content: end;
    }
    &-justify-center{
      justify-content: center;
    }
    &-justify-between{
      justify-content: space-between;
    }
    &-justify-around{
      justify-content: space-around;
    }

    &-align-start{
      align-items: flex-start;
    }
    &-align-end{
      align-items: flex-end;
    }
    &-align-center{
      align-items: center;
    }
    &-align-baseline{
      align-items: baseline;
    }
    &-align-stretch{
      align-items: stretch;
    }

    &-align-content-start {
      align-content: flex-start;
    }

    &-align-content-end {
      align-content: flex-end;
    }

    &-align-content-center {
      align-content: center;
    }

    &-align-content-between {
      align-content: space-between;
    }

    &-align-content-around {
      align-content: space-around;
    }

    &-align-content-stretch {
      align-content: stretch;
    }
  }

</style>
