<template>
  <div class="demo">
    <div class="demoName">
      <a href="" class="icon"></a>{{getComponentName()}}
    </div>
    <div class="demo-preview-item">
      <div class="demoTitle"></div>
      <div class="demoContainer">
        <Progress appear-transition></Progress>
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Progress from "@/components/feedback/progress/Progress"
  export default {
    name: "Demo",
    components: { Progress },
    computed: {
      key() {
        return this.$route.fullPath
      }
    },
    methods: {
      getComponentName() {
        return [...this.$route.name].map((item, index) => {
          if (index === 0) {
            item = item.toUpperCase()
          }
          return item
        }).join("")
      }
    }
  }
</script>

<style scoped lang="scss">

  .demoName {
    font-size: 19 * $hd;
    color: #404040;
    padding: 21 * $hd 0 21 * $hd 15 * $hd;
    .icon {
      display: inline-block;
      width: 19 * $hd;
      height: 19 * $hd;
      background-image: url(https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png);
      background-size: cover;
      vertical-align: -1 * $hd;
      margin-right: 30 * $hd;
      position: relative;
    &:after {
       content: '';
       position: absolute;
       top: 2.5 * $hd;
       right: -15 * $hd;
       width: 1PX;
       height: 15 * $hd;
       background-color: #ceced1;
     }
    }
  }
</style>
