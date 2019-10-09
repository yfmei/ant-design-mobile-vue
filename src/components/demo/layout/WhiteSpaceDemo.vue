<template>
  <div>
    <div class="block">Block</div>
    <WhiteSpace size="xs"/>
    <div class="block">Block</div>
    <WhiteSpace size="sm"/>
    <div class="block">Block</div>
    <WhiteSpace size="md"/>
    <div class="block">Block</div>
    <WhiteSpace size="lg"/>
    <div class="block">Block</div>
    <WhiteSpace size="xl"/>
    <div class="block">Block</div>
  </div>
</template>

<script>
  import WhiteSpace from "@/components/layout/WhiteSpace"
  export default {
    name: "WhiteSpaceDemo",
    components: { WhiteSpace }
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
