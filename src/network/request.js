import axios from "axios"

export function request(config) {
  // 1. 创建axios实例  为什么创建实例呢，是因为一个大型的网站请求的服务器可能不是一个，所以请求的地址也不一样，所以常见axios实例可以很好解决这样的问题
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
  // 拦截器（ 实例）
  // 请求拦截
  instance.interceptors.request.use(config => {
      //console.log(config)
      // 做些事情比如 config中的一些信息不符合副武器的要求
      // 比如每次发送网络请求时，都希望界面中显示一个请求的图标（请求时开始，结束时结束）
      // 比如某些网络请求（比如登录（token）），必须携带一些特殊的信息
      return config
  },err => {
    console.log(err)
  })
  // 返回是拦截 响应拦截
  instance.interceptors.response.use(res => {
    // 网络请求的图标可以让他不显示了
    return res
  },err => {
    console.log(err)
  })
  // 应为创建的instance是就是一个promise，所以直接返回 就可以了
  return instance(config)
}

export function http(config) {
  // 1. 创建axios实例  为什么创建实例呢，是因为一个大型的网站请求的服务器可能不是一个，所以请求的地址也不一样，所以常见axios实例可以很好解决这样的问题
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 5000
  })
  // 应为创建的instance是就是一个promise，所以直接返回 就可以了
  return instance(config)
}