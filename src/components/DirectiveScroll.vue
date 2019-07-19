<template>
  <div>
    <ul v-scroll="queryList">
      <li v-for="item in list">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>

  import { getListCallback, request } from "@/utils/mockRequest"

  export default {
    name: "Scroll",
    components: { },
    data() {
      return {
        list: []
      }
    },
    created() {
      this.queryList()
    },
    methods: {
      queryList(data) {
        let that = this
        data = data || {}
        data.url = "queryList"
        request(data).then((res) => {
          if (res.data.statusCode === 200) {
            that.list = getListCallback(res)
          }
        })
      },
      queryInfo(data) {
        let that = this
        data = data || {}
        data.url = "queryInfo"
        request(data).then((res) => {
          if (res.data.statusCode === 200) {
            that.obj = res.data.returnObj
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
