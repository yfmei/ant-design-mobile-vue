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

<style lang="scss">
  $whitePrefixClz: am-whitespace;
  .#{$whitePrefixClz}{
    &-xs {
      height: 3px;
    }

    &-sm {
      height: 6px;
    }

    &-md {
      height: 9px;
    }

    &-lg {
      height: 15px;
    }

    &-xl {
      height: 21px;
    }
  }

</style>
