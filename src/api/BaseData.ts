import { AutoLoad } from "@/annotations/EnvLoader";
// import fetch from "node-fetch"; // node_fetch 存在问题，放开使用会报错，原理不明

// 自动加载模块
@AutoLoad([
  "Report", 
  "DataCount",
  "HoursingResourceThermal",
])
export class BaseData {

  declare to: { [key: string]: string } // 后端访问路径

  async fetchRecords(obj: string) {
    // console.log(this.to)
    if (Object.keys(this.to).findIndex(key => key === obj) === -1) throw new Error(`${obj} 未找到`)

    let results = await fetch(this.to[obj], {
      method: 'get',
    })
    if (results.status !== 200) {
      throw new Error(`${obj} 请求失败`)
    }
    return await results.json()
  }
}
