import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ljs-vitepress",//网页标签 头部组件左侧标题
  description: "ljs-vitepress-one-demo",
  outDir:"docs",//打包输出到根目录 默认在.vitepress/dist下面
  base:"/ljs-design/",//打包带上/ljs-design/路径 原先路径/assets/app.BlgFNldS.js 变成 /ljs-design/assets/app.BlgFNldS.js
  themeConfig: {
    logo: '../public/logo.jpg',//头部组件左侧logo
    // https://vitepress.dev/reference/default-theme-config
    nav: [ //头部组件右侧导航
      { text: '主页', link: '/' },
      { text: '详情', link: '/markdown-examples' }
    ],
    //侧边导航栏
    sidebar: [
      {
        text: '详情',//大标题
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' },
      { icon: 'youtube', link: 'https://www.youtube.com/vue' },
      { icon: 'facebook', link: 'https://www.facebook.com/vuejs' }
    ],

    //内容页面页脚
    docFooter:{
      prev: 'config配置上一页',
      next: 'config下一页'
    },

    //主页页脚
    footer:{
      message:"基于VitePress搭建的文档",
      copyright: 'Copyright © 2024-present ljs'
    },

    //最后更改时间 必须配合git才有效 git最新一次的提交时间就是它的值
    lastUpdated:{
      text:"最后更新时间",
      formatOptions:{
        dateStyle:"full",
        timeStyle:"short"
      }
    },

    //全文搜索
    search:{
      provider:"local"
    },
  }
})
