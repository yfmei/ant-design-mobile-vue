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
        return "whitespace-" + this.size
      }
    }
  }
</script>

<style type="text/css" scoped>
  .whitespace-xs {
    height: 3px;
  }

  .whitespace-sm {
    height: 6px;
  }

  .whitespace-md {
    height: 9px;
  }

  .whitespace-lg {
    height: 15px;
  }

  .whitespace-xl {
    height: 21px;
  }
</style>
