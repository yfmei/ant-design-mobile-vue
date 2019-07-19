/**
 * @author yfmei
 * @date 2019/2/22
 */

/**
 * 默认生成15条测试数据
 * @param titles
 * @param times
 */
export function generateListData(titles, times = 15) {
  let data = []

  for (let i = 0; i < times; i++) {
    let obj = generateObjData(titles)
    obj.name = i
    data.push(obj)
  }
  return data
}

/**
 * 根据属性名生成随机对象
 * @param titles
 */
export function generateObjData(titles) {
  let obj = {}
  titles.map((item, index) => {
    // todo 根据类型生成模拟数据
    obj[item.prop] = index
    // obj[item.prop] = generateWordPair()
  })

  return obj
}

export function generateReturnObj(length) {
  let pageNo = 1
  let pageSize = 50
  return {
    pageNo: pageNo,
    pageSize: pageSize,
    prePage: pageNo - 1,
    nextPage: pageNo + 1,
    totalPages: Math.floor(length / pageSize),
    total: length,
    hasPre: false,
    hasNext: true,
    result: []
  }
}

/**
 * 生成指定范围的随机数
 * @param maxNum 最大值
 * @returns {number}
 */
function randomNum(maxNum) {
  return Math.floor(Math.random() * maxNum)
}

/**
 * 随机生成 1-5 位的数字
 * @returns {string}
 */
function generateNum(seed = 10, times = randomNum(5)) {
  let ret = ""
  for (let i = 0; i < times; i++) {
    ret += randomNum(seed)
  }
  // todo 处理0开头的数字
  return ret
}

/**
 * 随机生成一个词组
 * @returns {string}
 */
function wordRandom() {
  let seed = generateSeed()
  let index = randomNum(seed.length)
  return seed[index]
}

/**
 * 随机生成 1-5 个词组组成的短语
 * @returns {string}
 */
function generateWordPair(times = randomNum(5)) {
  let ret = ""
  for (let i = 0; i < times; i++) {
    ret += wordRandom()
  }
  return ret
}

/**
 * 构造随机词组的种子
 * @returns {Array}
 */
function generateSeed() {
  return ["深入的", "理解", "函数式编程", "匿名函数", "闭包", "能够", "帮助", "编写", "优秀的", "代码"]
}

export default {
  generateListData,
  generateObjData,
  generateNum,
  generateWordPair
}
