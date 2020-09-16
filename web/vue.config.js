module.exports = {
  /* 部署应用包的基本URL, 不设置可能会出现打包后项目找不到资源问题 */
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    // 配置别名,默认src为@,修改后需要重新编译才能生效
    resolve: {
      alias: {
        api: '@/api',
        assets: '@/assets',
        components: '@/components',
        router: '@/router',
        store: '@/store',
        views: '@/views',
        tools: '@/tools',
        plugin: '@/plugin'
      }
    }
  }
}
