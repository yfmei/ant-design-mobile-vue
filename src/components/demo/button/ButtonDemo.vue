<template>
  <div>
    <WhiteSpace/>
    <WingBlank>
      <Button>default</Button>
      <WhiteSpace/>
      <Button disabled>default disabled</Button>
      <WhiteSpace/>
      <Button type="primary">primary</Button>
      <WhiteSpace/>
      <Button type="primary" disabled>primary disabled</Button>
      <WhiteSpace/>
      <Button type="warning">warning</Button>
      <WhiteSpace/>
      <Button type="warning" disabled>warning disabled</Button>
      <WhiteSpace/>
      <WingBlank>
        <Button type="ghost" inline>ghost</Button>
        <Button type="ghost" disabled inline>ghost disabled</Button>
        <Button type="ghost" size="small" inline>ghost</Button>
      </WingBlank>
    </WingBlank>
  </div>
</template>

<script>
  import Button from "@/components/button/Button"
  import WhiteSpace from "@/components/layout/WhiteSpace"
  import WingBlank from "@/components/layout/WingBlank"
  export default {
    name: "ButtonDemo",
    components: { Button, WhiteSpace, WingBlank }
  }
</script>

<style scoped>

</style>
