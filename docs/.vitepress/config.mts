import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/self-learning-english/',
  title: '自学英语',
  description: '分享一下自学英语的过程',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简介', link: '/introduce' },
      { text: '对话', link: '/dialogue/intro' },
      { text: '时态', link: '/tense/intro' },
      { text: '句型', link: '/sentence-pattern' },
      { text: '语法', link: '/grammar' },
      { text: '术语', link: '/terminology' }
    ],

    sidebar: {
      '/tense/': [
        {
          text: '时态',
          items: [
            { text: '简介', link: '/tense/intro' },
            { text: '过去进行时', link: '/tense/past-continuous' },
            { text: '一般过去时', link: '/tense/past-simple' },
            { text: '现在进行时', link: '/tense/present-continuous' },
            { text: '现在完成时', link: '/tense/present-perfect' },
            { text: '一般现在时', link: '/tense/present-simple' }
          ]
        }
      ],
      '/dialogue/': [
        {
          text: '对话',
          items: [
            { text: '简介', link: '/dialogue/intro' },
            { text: '面试', link: '/dialogue/interview' },
            { text: '前端', link: '/dialogue/fe' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/woai3c/self-learning-english' }]
  }
})
