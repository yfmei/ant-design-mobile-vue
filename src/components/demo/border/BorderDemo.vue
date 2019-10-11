<template>
  <WingBlank>

    <WhiteSpace></WhiteSpace>
    <Border></Border>
    <WhiteSpace></WhiteSpace>
    <Border type="dashed" color="#000"></Border>
    <WhiteSpace></WhiteSpace>
    <Border size="4" color="#000"></Border>
    <WhiteSpace></WhiteSpace>
    <Border size="4" color="red"></Border>
  </WingBlank>
</template>

<script>

  import Border from "@/components/border/Border"
  import WhiteSpace from "@/components/layout/WhiteSpace"
  import WingBlank from "@/components/layout/WingBlank"
  export default {
    name: "BorderDemo",
    components: { Border, WhiteSpace, WingBlank }
  }
</script>

<style scoped>
  .container {
    width: 200px
  }
</style>
