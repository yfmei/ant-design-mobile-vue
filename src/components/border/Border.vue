<template>
  <div>
    <div :style="borderStyle"></div>
  </div>
</template>

<script>
  export default {
    name: "Border",
    props: {
      size: {
        type: String,
        default: "1"
      },
      type: {
        type: String,
        default: "solid"
      },
      color: {
        type: String,
        default: "#eee"
      }
    },
    data() {
      let that = this
      return {
        borderStyle: {
          borderTop: that.size + "px " + that.type + " " + that.color
        }
      }
    }
  }
</script>

<style scoped>
  .am-border-solid-1{
    border-top: 1px solid #eee;
  }

  .am-border-solid-1{
    border-top: 1px solid #eee;
  }

  .am-border-dashed-1{
    border-top: 1px dashed #eee;
  }

  .am-border-dashed-2{
    border-top: 2px dashed #eee;
  }
</style>
