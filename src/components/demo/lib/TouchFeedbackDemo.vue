<template>
  <TouchFeedback active-class-name="touch" :activeStyle="{backgroundColor: '#fa541c'}">
    <div>触摸反馈</div>
  </TouchFeedback>
</template>

<script>
  import TouchFeedback from "@/components/lib/TouchFeedback"

  export default {
    name: "TouchFeedbackDemo",
    components: { TouchFeedback },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .touch{
    color: $blue;
  }
</style>
