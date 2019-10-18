<template>
  <div class="block">{{ placeholder }}</div>
</template>

<script>
  export default {
    name: "Block",
    props: {
      placeholder: {
        default: "Block"
      }
    }
  }
</script>

<style scoped>
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
</style>
