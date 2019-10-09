<template>
  <div :style="flexStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Flex",
    props: {
      // 主轴排列方向
      // row
      // row-reverse
      // column
      // column-reverse
      direction: {
        type: String,
        default: "row"
      },
      // 子容器宽度超过父容器时如何换行
      // nowrap 不换行
      // wrap 换行
      // wrap-reverse 从下到上换行
      wrap: {
        type: String,
        default: "nowrap"
      },
      // direction 和 wrap 的缩写 "row nowrap", data() 中的顺序决定优先级
      flow: {
        type: String,
        default: "row nowrap"
      },
      // 设置子容器沿主轴排列
      // flex-start 左对齐
      // flex-end 右对齐
      // space-around 每个子容器之间的间隔相同, 因此项目之间的间距比子容器与父容器边框的间距大一倍
      // space-between 首尾两个子容器紧贴父容器, 子容器间隔相同
      justify: {
        type: String,
        default: "center"
      },
      // 设置子容器沿交叉轴排列
      // flex-start 上对齐
      // flex-end 下对齐
      // baseline start-end 方向的首行文字为基线对齐
      // stretch 拉伸占满整个容器
      align: {
        type: String,
        default: "center"
      }
    },
    data() {
      let that = this
      let flex = "flex-"
      if (!that.$options.propsData.flow) {
        // flow 不存在就用 direction + wrap 组合
        that.$flow = that.direction + " " + that.wrap
      }
      return {
        flexStyle: {
          display: "flex",
          // flexDirection: that.direction,
          // flexWrap: that.wrap,
          flexFlow: that.$flow,
          justifyContent: flex + that.justify,
          alignItems: flex + that.align
        },
        $flow: that.flow
      }
    }
  }
</script>

<style scoped>
  .flex-container {
    display: flex;
    justify-content: center; /** 水平居中**/
    align-items: center;     /** 垂直居中**/
  }

</style>
