<template>
  <TouchFeedback :active-class-name="activeClassName" :active-style="activeStyle" :disabled="disabled">
      <a href="javascript:void(0)" :class="getButtonClass" @click="clickEvent" role="button" :aria-disabled="disabled">
        <span><slot></slot></span>
      </a>
  </TouchFeedback>
</template>

<script>
  import { classNames } from "@/components/utils/classNames"
  import TouchFeedback from "@/components/lib/TouchFeedback"

  export default {
    name: "Button",
    components: { TouchFeedback },
    props: {
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "large"
      },
      activeStyle: {
        type: Object,
        default: () => {
          return {}
        }
      },
      activeClassName: {
        type: String,
        default: "am-button-active"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onClick: {

      },
      inline: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ""
      },
      prefixCls: {
        type: String,
        default: "am-button"
      },
      className: {
        type: String,
        default: ""
      }
    },
    computed: {
      getButtonClass() {
        let that = this
        console.log(that.type)
        return classNames(that.prefixCls, that.className, {
          [that.prefixCls + "-" + that.type]: that.type,
          [that.prefixCls + "-" + that.size]: that.size,
          [that.prefixCls + "-disabled"]: that.disabled,
          [that.prefixCls + "-inline"]: that.inline
        })
      }
    },
    methods: {
      clickEvent() {
        let that = this
        if (!that.disabled) {
          this.$emit(this.onClick ? this.onClick : "click")
        }
      }
    }
  }
</script>

<style lang="scss">
  /* 默认按钮和 ghost 按钮的 disabled 需要特殊处理*/
  $height: 47px;
  $padding: 0 15px;
  $prefixClz: am-button;

  .#{$prefixClz}{
    display: block;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    height: $height;
    line-height: $height;
    padding: $padding;

    /*默认点击和禁止样式*/
    &-active {
      background-color: $white;
    }

    &-disabled {
      color: $gray;
      opacity: 0.4; /**不透明度**/
      /*移除点击效果*/
      -webkit-tap-highlight-color:rgba(0,0,0,0);
    }

    &-default{
      @include button($white, $black, $light-gray);
      border: none;
      /*覆盖默认点击和禁止样式*/
      &.#{$prefixClz}-active {
        background-color: #ddd;
        color: $black;
      }

      &.#{$prefixClz}-disabled{
        border: solid $light-gray 1px ;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    &-primary {
      @include button($blue);

      &.#{$prefixClz}-active{
        color: rgba(255, 255, 255, 0.3);
        background-color: #0e80d2;
      }

      &.#{$prefixClz}-disabled{
        color: rgba(255, 255, 255, 0.6);
      }
    }

    &-warning {
      @include button($red);

      &.#{$prefixClz}-active{
        color: rgba(255, 255, 255, 0.6);
        background-color: #d24747;;
      }
      &.#{$prefixClz}-disabled{
        color: rgba(255, 255, 255, 0.6);
      }
    }

    &-ghost {
      @include button($white, $blue, $blue);

      &.#{$prefixClz}-active {
        background-color: transparent;
        color: #108ee9;
        opacity: 0.6;
      }

      &.#{$prefixClz}-disabled{
        @include button($white, $black, $light-gray);
      }

    }

    &-inline {
      display: inline-block;
      padding: 0 15px;
    }

    &-small{
      font-size: 13px;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;
    }
  }

  a {
    text-decoration: none; // 移除下划线
    -webkit-touch-callout: none; // 禁止长按菜单
    outline:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0); // 移除点击背景色
  }

</style>
