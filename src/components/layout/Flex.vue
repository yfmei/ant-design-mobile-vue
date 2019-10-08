<template>
  <div class="flex-container box-200">
    <div class="box-100"></div>
  </div>
</template>

<script>
  export default {
    name: "Flex"
  }
</script>

<style scoped>
  .flex-container {
    display: flex;
    justify-content: center; /** 水平居中**/
    align-items: center;     /** 垂直居中**/
  }

</style>
