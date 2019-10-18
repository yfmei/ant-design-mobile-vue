<template>
  <div>
    <Block/>
    <WhiteSpace size="xs"/>
    <Block/>
    <WhiteSpace size="sm"/>
    <Block/>
    <WhiteSpace size="md"/>
    <Block/>
    <WhiteSpace size="lg"/>
    <Block/>
    <WhiteSpace size="xl"/>
    <Block/>
  </div>
</template>

<script>
  import WhiteSpace from "@/components/layout/WhiteSpace"
  import Block from "@/components/lib/Block"
  export default {
    name: "WhiteSpaceDemo",
    components: { WhiteSpace, Block }
  }
</script>

<style scoped>

</style>
