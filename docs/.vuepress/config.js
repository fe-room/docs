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
    base: "/Web-Docs/",
    nav: [
      {
          text: 'Guide',
          link: '/guide/',
      }
  ]
  }