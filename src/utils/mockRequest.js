/**
 * 模拟请求，返回虚拟数据
 * @author PC
 * @date 2019/7/20
 */
import { generateObjData, generateListData, generateReturnObj } from "@/utils/mock"

// mock list
let length = 1000
// 模拟的总数据
let totalList = generateListData([{ prop: "id" }, { prop: "name" }], length)
let mockReturnObj = generateReturnObj(length) // 临时存储列表数据,累加用

let res = {
  data: {
    statusCode: "",
    returnObj: {}
  }
}

function pageHelper(pageNo, pageSize) {
  let targetMaxIndex = pageNo * pageSize
  return totalList.slice(targetMaxIndex - pageSize, targetMaxIndex + 1)
}

function getList(data) {
  let pageNo = data.pageNo || 1
  let pageSize = data.pageSize || 50
  let obj = generateReturnObj(length)

  if (pageNo > mockReturnObj.totalPages) {
    res.data.statusCode = 200
    res.data.returnObj = {}
    res.data.msg = "没有更多数据了"
    return res
  }

  obj.pageNo = pageNo
  obj.hasNext = pageNo < mockReturnObj.totalPages

  obj.result = pageHelper(pageNo, pageSize)
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
  let data = mockReturnObj.result

  if (returnObj.pageNo === 1) {
    // 初次加载
    data = returnObj.result
  } else {
    // 分页加载
    data = data.concat(returnObj.result)
  }

  mockReturnObj.result = data
  return data
}
