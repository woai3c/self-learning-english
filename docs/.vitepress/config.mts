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
      { text: '问答', link: '/qa/intro' },
      { text: '时态', link: '/tense/intro' },
      { text: '语法', link: '/grammar/intro' },
      { text: '短语', link: '/phrase/intro' },
      { text: '句型', link: '/sentence-pattern' },
      { text: '术语', link: '/terminology' },
    ],

    sidebar: {
      '/tense/': [
        {
          text: '时态',
          items: [
            { text: '简介', link: '/tense/intro' },
            { text: '过去进行时', link: '/tense/past-continuous' },
            { text: '一般现在时', link: '/tense/present-simple' },
            { text: '一般过去时', link: '/tense/past-simple' },
            { text: '现在进行时', link: '/tense/present-continuous' },
            { text: '现在完成时', link: '/tense/present-perfect' },
          ],
        },
      ],
      '/qa/': [
        {
          text: '问答',
          items: [
            { text: '简介', link: '/qa/intro' },
            { text: '面试', link: '/qa/interview' },
            {
              text: '前端',
              items: [
                { text: 'CSS', link: '/qa/fe/css' },
                { text: '监控', link: '/qa/fe/monitor' },
                { text: '脚手架', link: '/qa/fe/cli' },
                { text: '低代码', link: '/qa/fe/lowcode' },
                { text: '性能优化', link: '/qa/fe/performance-optimization' },
                { text: '前端工程', link: '/qa/fe/fe-engineering' },
                { text: '其他', link: '/qa/fe/other' },
              ],
            },
            { text: '职场交流', link: '/qa/workplace-communication' },
            { text: '其他', link: '/qa/other' },
          ],
        },
      ],
      '/grammar/': [
        {
          text: '语法',
          items: [
            { text: '简介', link: '/grammar/intro' },
            { text: 'for since ago', link: '/grammar/for-since-ago' },
            { text: 'be have do', link: '/grammar/be-have-do' },
            { text: '被动语态', link: '/grammar/passive-voice' },
            { text: 'will shall', link: '/grammar/will-shall' },
          ],
        },
      ],
      '/phrase/': [
        {
          text: '短语',
          items: [
            { text: '简介', link: '/phrase/intro' },
            { text: 'used to', link: '/phrase/used-to' },
            { text: 'be going to', link: '/phrase/be-going-to' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/woai3c/self-learning-english' }],
  },
})
