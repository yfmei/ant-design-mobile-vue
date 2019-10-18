<template>
  <div class="demo">
    <div class="demoName">
      <a href=""></a>
    </div>
    <div class="demo-preview-item">
      <div class="demoTitle"></div>
      <div class="demoContainer">
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Demo",
    computed: {
      key() {
        return this.$route.fullPath
      }
    },
    mounted() {
      console.log("full path: " + this.$route.fullPath)
    }
  }
</script>

<style scoped>

</style>
