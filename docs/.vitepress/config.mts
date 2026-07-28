import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/self-learning-english/',
  title: '自学英语',
  description: '以真实输出为核心的个人英语训练仓库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习方法', link: '/method/learning-principles' },
      { text: '训练记录', link: '/practice/family-album-usa/' },
      { text: '表达管理', link: '/expressions/active' },
      { text: '错误记录', link: '/mistakes/recurring-mistakes' },
      { text: '复盘', link: '/reviews/weekly-template' },
    ],

    sidebar: {
      '/method/': [
        {
          text: '学习方法',
          items: [
            { text: '学习原则', link: '/method/learning-principles' },
            { text: '每日训练流程', link: '/method/daily-workflow' },
            { text: '学习心得', link: '/method/lessons-learned' },
            { text: '训练用 Prompt', link: '/method/prompts' },
          ],
        },
      ],
      '/practice/': [
        {
          text: '训练记录',
          items: [
            {
              text: '走遍美国',
              items: [
                { text: '说明', link: '/practice/family-album-usa/' },
                { text: 'Ep2 Act1 The Blind Date', link: '/practice/family-album-usa/episode-02-act-01' },
              ],
            },
            { text: '听力练习', link: '/practice/listening/' },
            { text: '复述练习', link: '/practice/retelling/' },
            { text: '工作场景', link: '/practice/work-scenarios/' },
          ],
        },
      ],
      '/expressions/': [
        {
          text: '表达管理',
          items: [
            { text: '正在练习', link: '/expressions/active' },
            { text: '工作场景', link: '/expressions/work' },
            { text: '已掌握', link: '/expressions/mastered' },
          ],
        },
      ],
      '/mistakes/': [
        {
          text: '错误记录',
          items: [
            { text: '反复出现的问题', link: '/mistakes/recurring-mistakes' },
            { text: '语法错误', link: '/mistakes/grammar' },
            { text: '容易混淆的词', link: '/mistakes/vocabulary' },
            { text: '发音问题', link: '/mistakes/pronunciation' },
          ],
        },
      ],
      '/reviews/': [
        {
          text: '复盘',
          items: [
            { text: '周复盘模板', link: '/reviews/weekly-template' },
            { text: '月复盘模板', link: '/reviews/monthly-template' },
          ],
        },
      ],
      '/archive/': [
        {
          text: '归档',
          items: [
            { text: '说明', link: '/archive/' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/woai3c/self-learning-english' }],
  },
})
