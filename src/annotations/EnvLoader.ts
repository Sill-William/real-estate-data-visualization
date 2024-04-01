// 用ts实现的类装饰器
/**
 * 自动装载后端映射路由
 * @param value 
 * @returns 
 */
export function AutoLoad(values: string[]) {
  return function (target: any) {
    target.prototype.to = {}
    for (let value of values) {
      try {
        target.prototype.to[value] = import.meta.env[`VITE_BASEDATA_${value.toUpperCase()}_ROUTE`]
      } catch {
        console.error(`${value} is not defined in .env`)
      }
    }
    return target
  }
}