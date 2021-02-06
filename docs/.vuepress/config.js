module.exports = {
    title: 'Web Docs',
    description: 'Docs',
    theme: '@vuepress/blog',
    themeConfig: {},
    configureWebpack: {
      resolve: {
        alias: {}
      }
    },
    nav: [
      {
          text: 'Guide',
          link: '/guide/',
      }
  ]
  }