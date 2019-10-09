<template>
  <div>
    <WingBlank size="lg"><div class="block">Block</div></WingBlank>

    <WhiteSpace size="lg"/>
    <WingBlank size="md"><div class="block">Block</div></WingBlank>

    <WhiteSpace size="lg"/>
    <WingBlank size="sm"><div class="block">Block</div></WingBlank>
  </div>
</template>

<script>
  import WingBlank from "@/components/layout/WingBlank"
  import WhiteSpace from "@/components/layout/WhiteSpace"
  export default {
    name: "WingBlankDemo",
    components: { WingBlank, WhiteSpace }
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
