<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WingBlank",
    props: {
      size: {
        type: String,
        default: "lg"
      }
    },
    computed: {
      getClass() {
        return "am-wingblank-" + this.size
      }
    }
  }
</script>

<style lang="scss">
  $wingblankPrefixClz: am-wingblank;

  .#{$wingblankPrefixClz}{
    &-sm {
      margin-left: 5px;
      margin-right: 5px;
    }

    &-md {
      margin-left: 8px;
      margin-right: 8px
    }

    &-lg {
      margin-left: 15px;
      margin-right: 15px
    }
  }

</style>
