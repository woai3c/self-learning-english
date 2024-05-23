import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/self-learning-english/',
  title: '自学英语',
  description: '记录我自学英语的旅程',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '对话', link: '/dialogue' },
      { text: '时态', link: '/tense' },
      { text: '句型', link: '/sentence-pattern' },
      { text: '语法', link: '/grammar' },
      { text: '术语', link: '/terminology' }
    ],

    sidebar: {
      '/tense/': [
        {
          text: '时态',
          items: [
            { text: '简介', link: '/tense/' },
            { text: '现在进行时', link: '/tense/present-continuous' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/woai3c/self-learning-english' }]
  }
})
