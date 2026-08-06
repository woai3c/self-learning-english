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
      { text: '语法', link: '/grammar/intro' },
      { text: '发音', link: '/pronunciation/intro' },
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
                { text: 'Ep2 Act2 The Blind Date', link: '/practice/family-album-usa/episode-02-act-02' },
                { text: 'Ep2 Act3 The Blind Date', link: '/practice/family-album-usa/episode-02-act-03' },
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
      '/grammar/': [
        {
          text: '语法',
          items: [
            { text: '简介', link: '/grammar/intro' },
            { text: '词类', link: '/grammar/part-of-speech' },
            { text: '被动语态', link: '/grammar/passive-voice' },
            { text: '不定式和动名词', link: '/grammar/infinitive-gerund' },
            { text: 'for since ago', link: '/grammar/for-since-ago' },
            { text: 'be have do', link: '/grammar/be-have-do' },
            { text: 'will shall', link: '/grammar/will-shall' },
            { text: 'can could', link: '/grammar/can-could' },
            { text: 'might may', link: '/grammar/might-may' },
            { text: 'must should have-to', link: '/grammar/must-should-have-to' },
            { text: 'too either neither', link: '/grammar/too-either-neither' },
            { text: 'go', link: '/grammar/go' },
            { text: 'get', link: '/grammar/get' },
            { text: 'no none not-any', link: '/grammar/no-none-notany' },
            { text: 'both either neither', link: '/grammar/both-either-neither' },
            { text: 'as...as and the same ... as', link: '/grammar/as-as-the-same-as' },
            { text: 'at on in', link: '/grammar/at-on-in' },
          ],
        },
      ],
      '/pronunciation/': [
        {
          text: '发音',
          items: [
            { text: '简介', link: '/pronunciation/intro' },
            { text: '连读', link: '/pronunciation/liaison' },
            { text: '音素', link: '/pronunciation/phoneme' },
            { text: '重读', link: '/pronunciation/stress' },
            { text: '意群', link: '/pronunciation/thought-group' },
            { text: '音标分类', link: '/pronunciation/phonetic-alphabet-classification' },
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
      '/archive/': [
        {
          text: '归档',
          items: [
            { text: '说明', link: '/archive/' },
            { text: '周复盘模板', link: '/archive/weekly-template' },
            { text: '月复盘模板', link: '/archive/monthly-template' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/woai3c/self-learning-english' }],
  },
})
