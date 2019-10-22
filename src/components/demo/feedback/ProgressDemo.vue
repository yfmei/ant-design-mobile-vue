<template>
  <div>
    <Progress :percent="30"></Progress>
    <WhiteSpace/>
    <Progress position="normal" :percent="30" :unfilled="false" appear-transition></Progress>
    <WhiteSpace size="xl"/>
    <div class="show-info">
      <div class="progress">
        <Progress position="normal" :percent="percent"></Progress>
      </div>
      <div>{{percent}}%</div>
    </div>
    <WhiteSpace size="xl"/>
    <WingBlank>
      <Button @click="addPercent">(+/-)10</Button>
    </WingBlank>
  </div>
</template>

<script>
  import Progress from "@/components/feedback/progress/Progress"
  import WhiteSpace from "@/components/layout/WhiteSpace"
  import Button from "@/components/button/Button"
  import WingBlank from "@/components/layout/WingBlank"

  export default {
    name: "ProgressDemo",
    components: { Progress, WhiteSpace, Button, WingBlank },
    data() {
      return {
        percent: 70
      }
    },
    methods: {
      addPercent() {
        let that = this
        that.percent = that.percent === 100 ? 0 : that.percent + 10
      }
    }
  }
</script>

<style scoped>
  .show-info{
    display: flex;
    align-items: center;
  }
  .show-info .progress {
    margin-right: 5px;
    width: 100%;
  }
</style>
