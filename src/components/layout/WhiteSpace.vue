<template>
  <div :class="getClass"></div>
</template>

<script>
  export default {
    name: "WhiteSpace",
    props: {
      size: {
        type: String,
        default: "md"
      }
    },
    computed: {
      getClass() {
        return "am-whitespace-" + this.size
      }
    }
  }
</script>

<style type="text/css" scoped>
  .am-whitespace-xs {
    height: 3px;
  }

  .am-whitespace-sm {
    height: 6px;
  }

  .am-whitespace-md {
    height: 9px;
  }

  .am-whitespace-lg {
    height: 15px;
  }

  .am-whitespace-xl {
    height: 21px;
  }
</style>
