module.exports = {
  title: "Web Docs",
  description: "Docs",
  theme: "reco",
  base: "/docs/",
  themeConfig: {
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
     socialLinks: [     // 信息栏展示社交信息
       { icon: 'reco-github', link: 'https://github.com' },
       { icon: 'reco-npm', link: 'https://www.npmjs.com' }
     ]
   }
 }
};
