/**
 * @author yfmei
 * @date 2019/10/16
 */

let hasOwn = {}.hasOwnProperty

/**
 * get joined classNames
 * @param clz
 * @returns {string}
 */
export function classNames(...clz) {
  let classes = []

  for (let i = 0; i < clz.length; i++) {
    let arg = clz[i]
    if (!arg) continue

    let argType = typeof arg

    if (argType === "string" || argType === "number") {
      classes.push(arg)
    } else if (Array.isArray(arg) && arg.length) {
      let inner = classNames.apply(null, arg)
      if (inner) {
        classes.push(inner)
      }
    } else if (argType === "object") {
      for (let key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(" ")
}
