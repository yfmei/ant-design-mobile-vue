<template>
  <div class="flex-container">

    <div class="sub-title">Basic</div>

    <Flex justify="end" align="end">
      <div class="block item">Block</div>
      <div class="block item">Block</div>
    </Flex>
    <WhiteSpace size="lg"/>
    <Flex>
      <div class="block item">Block</div>
      <div class="block item">Block</div>
      <div class="block item">Block</div>
    </Flex>
    <WhiteSpace size="lg"/>
    <Flex>
      <div class="block item">Block</div>
      <div class="block item">Block</div>
      <div class="block item">Block</div>
      <div class="block item">Block</div>

    </Flex>
    <WhiteSpace size="lg"/>

    <div class="sub-title">Wrap</div>
    <Flex wrap="wrap">
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace size="lg"/>

    <div class="sub-title">Justify</div>
    <Flex justify="start">
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace/>
    <Flex justify="center">
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace/>
    <Flex justify="end">
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
    </Flex>

    <WhiteSpace/>
    <Flex justify="between">
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace/>

    <Flex justify="around">
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace size="lg"/>
    <div class="sub-title">Align</div>

    <Flex align="start">
      <div class="block inline">Block</div>
      <div class="block inline small">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace/>
    <Flex align="end">
      <div class="block inline">Block</div>
      <div class="block inline small">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace/>
    <Flex align="baseline">
      <div class="block inline">Block</div>
      <div class="block inline small">Block</div>
      <div class="block inline">Block</div>
    </Flex>
    <WhiteSpace/>
    <Flex align="stretch">
      <div class="block inline">Block</div>
      <div class="block inline small">Block</div>
      <div class="block inline">Block</div>
    </Flex>
  </div>
</template>

<script>
  import Flex from "@/components/layout/Flex"
  import WhiteSpace from "components/layout/WhiteSpace"

  export default {
    name: "FlexDemo",
    components: { WhiteSpace, Flex }
  }
</script>

<style type="text/css" scoped>
  .block:first-child {
     margin-left: 0;
  }

  .block {
    text-align: center;
    background-color: #ebebef;
    color: #bbb;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }

  .small {
    height: 20px!important;
    line-height: 20px!important;
  }

  .flex-container{
    margin: 0 15px;
  }

  .inline{
    width: 80px!important;
    margin: 9px 9px 9px 0;
  }

  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 18px 0;
  }

  .item {
    flex: 1;
    margin-left: 8px;
  }
</style>

