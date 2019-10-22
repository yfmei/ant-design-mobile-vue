<template>
  <div id="app">
    <Progress appear-transition></Progress>
    <router-view></router-view>
  </div>
</template>
<script>
  import Progress from "@/components/feedback/progress/Progress"

  export default {
    name: "App",
    components: { Progress }
  }
</script>
<style lang="scss">

</style>
