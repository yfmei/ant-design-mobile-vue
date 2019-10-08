<template>
  <div :style="flexStyle" class="box-200">
    <div class="box-100"></div>
  </div>
</template>

<script>
  export default {
    name: "Flex",
    props: {
      justifyContent: {
        type: String,
        default: "center"
      },
      alignItems: {
        type: String,
        default: "center"
      }
    },
    data() {
      let that = this
      return {
        flexStyle: {
          display: "flex",
          justifyContent: that.justifyContent,
          alignItems: that.alignItems
        }
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
