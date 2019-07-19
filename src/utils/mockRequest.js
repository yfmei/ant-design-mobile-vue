/**
 * @author PC
 * @date 2019/7/20
 */
import { generateObjData, generateListData, generateReturnObj } from "@/utils/mock"

// mock list
let length = 1000
let totalList = generateListData([{ prop: "id" }, { prop: "name" }], length)
let returnObj1 = generateReturnObj(length) // 临时存储列表数据,累加用

let res = {
  data: {
    statusCode: "",
    returnObj: {}
  }
}

function getList(data) {
  let pageNo = data.pageNo || 1
  let pageSize = data.pageSize || 50
  let hasNext = data.hasNext || true
  let obj = generateReturnObj(length)

  if (pageNo > returnObj1.totalPages) {
    res.data.statusCode = 200
    res.data.returnObj = {}
    res.data.msg = "没有更多数据了"
    return res
  }
  if (pageNo === returnObj1.totalPages) {
    hasNext = false
  }
  obj.pageNo = pageNo
  obj.hasNext = hasNext

  let targetMaxIndex = pageNo * pageSize
  let list = []
  for (let i = targetMaxIndex - pageSize; i < targetMaxIndex; i++) {
    list.push(totalList[i])
  }
  obj.result = list
  return obj
}

export function request(data) {
  let obj = {}
  if (data.url.includes("List")) {
    obj = getList(data)
  } else {
    obj = generateObjData([{ prop: "id" }, { prop: "name" }])
  }
  res.data.statusCode = 200
  res.data.returnObj = obj
  return new Promise((resolve) => {
    resolve(res)
  })
}

export function getListCallback(res) {
  let returnObj = res.data.returnObj
  let data = returnObj1.result

  if (returnObj.pageNo === 1) {
    // 初次加载
    data = returnObj.result
  } else {
    // 分页加载
    data = data.concat(returnObj.result)
  }

  returnObj1.result = data
  return data
}
