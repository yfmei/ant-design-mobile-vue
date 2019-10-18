<template>
  <div class="flex-container">

    <div class="sub-title">Basic</div>

    <Flex justify="end" align="end">
      <Block class="item"/>
      <Block class="item"/>
    </Flex>
    <WhiteSpace size="lg"/>
    <Flex>
      <Block class="item"/>
      <Block class="item"/>
      <Block class="item"/>
    </Flex>
    <WhiteSpace size="lg"/>
    <Flex>
      <Block class="item"/>
      <Block class="item"/>
      <Block class="item"/>
      <Block class="item"/>

    </Flex>
    <WhiteSpace size="lg"/>

    <div class="sub-title">Wrap</div>
    <Flex wrap="wrap">
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace size="lg"/>

    <div class="sub-title">Justify</div>
    <Flex justify="start">
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex justify="center">
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex justify="end">
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
    </Flex>

    <WhiteSpace/>
    <Flex justify="between">
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace/>

    <Flex justify="around">
      <Block class="inline"/>
      <Block class="inline"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace size="lg"/>
    <div class="sub-title">Align</div>

    <Flex align="start">
      <Block class="inline"/>
      <Block class="inline small"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex align="end">
      <Block class="inline"/>
      <Block class="inline small"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex align="baseline">
      <Block class="inline"/>
      <Block class="inline small"/>
      <Block class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex align="stretch">
      <Block class="inline"/>
      <Block class="inline small"/>
      <Block class="inline"/>
    </Flex>
  </div>
</template>

<script>
  import Flex from "@/components/layout/Flex"
  import WhiteSpace from "@/components/layout/WhiteSpace"
  import Block from "@/components/lib/Block"

  export default {
    name: "FlexDemo",
    components: { WhiteSpace, Flex, Block }
  }
</script>

<style type="text/css" scoped>

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

