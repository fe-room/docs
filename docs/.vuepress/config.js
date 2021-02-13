module.exports = {
  title: "Daily Notes",
  description: "Programmer's daily notes",
  theme: "reco",
  base: "/docs/",
  themeConfig: {
    lastUpdated: 'Last Updated',
    authorAvatar: '/hero.jpg',
    author: 'cm',
    startYear: '2021',
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ],
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    type: 'blog',
       // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
    },

  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
};
