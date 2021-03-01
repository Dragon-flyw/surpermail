module.exports = {
  // vue项目中关闭eslint
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      //extenstions: [], 引入文件可以省略后缀名
        alias: {   // 起别名引入文件时使用
        "assets" : '@/assets',
        "common" : '@/common',
        "components" : '@/components',
        "network" : '@/network',
        "views" : '@/views',
      }
    }
  }
}
