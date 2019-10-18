<template>
  <div>
    <WingBlank size="lg">
      <Block/>
    </WingBlank>

    <WhiteSpace size="lg"/>
    <WingBlank size="md">
      <Block/>
    </WingBlank>

    <WhiteSpace size="lg"/>
    <WingBlank size="sm">
      <Block/>
    </WingBlank>
  </div>
</template>

<script>
  import WingBlank from "@/components/layout/WingBlank"
  import WhiteSpace from "@/components/layout/WhiteSpace"
  import Block from "@/components/lib/Block"
  export default {
    name: "WingBlankDemo",
    components: { WingBlank, WhiteSpace, Block }
  }
</script>

<style scoped>
  .block {
    text-align: center;
    background-color: #ebebef;
    color: #bbb;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
</style>
