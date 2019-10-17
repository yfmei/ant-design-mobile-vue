<template>
  <div class="demoPage">
    <div v-for="m in modules" :class="{'am-list': true, 'category-closed': !m.isFold}">
      <div class="am-list-header am-demo-category" @click="m.isFold = !m.isFold">
        <div class="am-demo-category-name">{{m.name}}</div>
        <div class="am-demo-category-arrow"></div>
      </div>
      <div class="am-list-body">
        <div class="am-list-item" v-for="c in m.children" @click="jump(c.path)">
          <div class="am-list-line">
            <div class="am-list-content">{{c.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Demo",
    data() {
      return {
        modules: [
          {
            name: "Layout",
            isFold: false,
            children: [
              { name: "Flex", path: "/flex" },
              { name: "WhiteSpace", path: "/WhiteSpace" },
              { name: "WingBlank", path: "/WingBlank" }
            ]
          },
          {
            name: "Navigation",
            isFold: false,
            children: [
              { name: "Drawer-Basic", path: "/Drawer-Basic" },
              { name: "Drawer-Docked in document", path: "/Drawer-Docked in document" },
              { name: "Menu", path: "/Menu" },
              { name: "NavBar", path: "/NavBar" },
              { name: "Pagination", path: "/Pagination" },
              { name: "Popover", path: "/Popover" },
              { name: "SegmentedControl", path: "/SegmentedControl" },
              { name: "TabBar", path: "/TabBar" },
              { name: "Tabs", path: "/Tabs" }
            ]
          },
          {
            name: "Data Entry",
            isFold: false,
            children: [
              { name: "Button", path: "/Button" },
              { name: "Calendar", path: "/Calendar" },
              { name: "CheckBox", path: "/CheckBox" },
              { name: "DatePicker", path: "/DatePicker" },
              { name: "DatePickerView", path: "/DatePickerView" },
              { name: "ImagePicker", path: "/ImagePicker" },
              { name: "InputItem", path: "/InputItem" },
              { name: "Picker", path: "/Picker" },
              { name: "PickerView", path: "/PickerView" },
              { name: "Radio", path: "/Radio" },
              { name: "Range", path: "/Range" },
              { name: "SearchBar", path: "/SearchBar" },
              { name: "Slider", path: "/Slider" },
              { name: "Stepper", path: "/Stepper" },
              { name: "Switch", path: "/Switch" },
              { name: "TextareaItem", path: "/TextareaItem" }
            ]
          },
          {
            name: "Data Display",
            isFold: false,
            children: [

              { name: "Accordion", path: "/Accordion" },
              { name: "Badge", path: "/Badge" },
              { name: "Card", path: "/Card" },
              { name: "Carousel", path: "/Carousel" },
              { name: "Grid", path: "/Grid" },
              { name: "Icon", path: "/Icon" },
              { name: "List", path: "/List" },
              { name: "NoticeBar", path: "/NoticeBar" },
              { name: "Steps", path: "/Steps" },
              { name: "Tag", path: "/Tag" }
            ]
          },
          {
            name: "Feedback",
            isFold: false,
            children: [
              { name: "ActionSheet", path: "/ActionSheet" },
              { name: "ActivityIndicator", path: "/ActivityIndicator" },
              { name: "Modal", path: "/Modal" },
              { name: "Progress", path: "/Progress" },
              { name: "Toast", path: "/Toast" }
            ]
          },
          {
            name: "Gesture",
            isFold: false,
            children: [
              { name: "PullToRefresh", path: "/PullToRefresh" },
              { name: "SwipeAction", path: "/SwipeAction" }
            ]
          },
          {
            name: "Combination",
            isFold: false,
            children: [
              { name: "ListView", path: "/ListView" },
              { name: "Result", path: "/Result" }
            ]
          },
          {
            name: "Other", isFold: false, children: [{ name: "LocaleProvider", path: "/localeProvider" }]
          },
          {
            name: "Lib", isFold: false, children: [{ name: "TouchFeedback", path: "/touchFeedback" }]
          }
        ]
      }
    },
    methods: {
      jump(path) {
        this.$router.push({ path: path })
      }
    }
  }
</script>

<style lang="scss">
  .am-list{
    margin: 0 16px 12px;
    background-color: white;

    .am-list-header{
      padding-left: 24px;
      height: 70px;
      line-height: 70px;
      color: #404040;
      font-size: 16px;
    }

    .am-list-item{
      display: flex;
      align-items: center;
      padding-left: 24px;
      min-height: 44px;
      & .am-list-content{
        color: #666;
        font-size: 14px;
        flex: 1;
        width: auto;
        padding-top: 7px;
        padding-bottom: 7px;
        line-height: 1.5;
      }

      &:active{
        background-color: #eeeeee;
      }
    }

    &.category-closed {
      .am-list-header {
        position: relative;
      }
      .am-list-body {
        display: none;
      }
    }
  }

  .am-demo-category{
    display: flex;
    &-name{
      flex: 1;
    }
  }

  .am-list-body div:not(:last-child) .am-list-line {
    display: flex;
    flex: 1;
    border-bottom: 1px solid #eee;
    align-items: center;
    align-self: stretch;
  }

</style>
