<template>
  <Flex justify="center" align="center" :class="getButtonClass" :style="getCustomStyle" @click="clickEvent">
    <slot></slot>
  </Flex>

</template>

<script>
  import Flex from "components/layout/Flex"

  export default {
    name: "Button",
    components: { Flex },
    props: {
      type: {
        type: String,
        default: "default"
      },
      radius: {
        type: String,
        default: "5"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "18"
      },
      cursor: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: String,
        default: ""
      }
    },
    computed: {
      getButtonClass() {
        let that = this
        console.log(that.type)
        return that.type + (that.disabled ? "-disabled disabled" : "") + " " + (that.cursor ? "cursor" : "")
      },
      getCustomStyle() {
        let that = this
        console.log(that.type)
        return that.customStyle
      }
    },
    methods: {
      clickEvent() {

      }
    }
  }
</script>

<style scoped lang="scss">

  .default{
    @include button($white, $black, $light-gray);
  }

  .default-disabled{
    @include button($light-gray, $black, $light-gray);
  }

  .primary{
    @include button($blue);
  }

  .primary-disabled{
    @include button($blue);
  }

  .warning-disabled{
    @include button($red);
  }

  .warning{
    @include button($red);
  }

  .ghost{
    @include button($white, $blue, $blue);
  }

  .ghost-disabled{
    @include button($white, $black, $light-gray);
  }

  .cursor {
    cursor: pointer;
    pointer-events: auto;
  }

  .disabled{
    opacity: 0.4;
  }

</style>
