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
      { text: '对话', link: '/qa/intro' },
      { text: '时态', link: '/tense/intro' },
      { text: '语法', link: '/grammar/intro' },
      { text: '短语', link: '/phrase/intro' },
      { text: '句型', link: '/sentence-pattern/intro' },
      { text: '发音', link: '/pronunciation/intro' },
      { text: '术语', link: '/terminology' },
      { text: '影视', link: '/movies-tv/intro' },
    ],

    sidebar: {
      '/tense/': [
        {
          text: '时态',
          items: [
            { text: '简介', link: '/tense/intro' },
            {
              text: '现在时态',
              items: [
                { text: '一般现在时', link: '/tense/present-simple' },
                { text: '现在进行时', link: '/tense/present-continuous' },
                { text: '现在完成时', link: '/tense/present-perfect' },
                { text: '现在完成进行时', link: '/tense/present-perfect-continuous' },
              ],
            },
            {
              text: '过去时态',
              items: [
                { text: '一般过去时', link: '/tense/past-simple' },
                { text: '过去进行时', link: '/tense/past-continuous' },
                { text: '过去完成时', link: '/tense/past-perfect' },
                { text: '过去完成进行时', link: '/tense/past-perfect-continuous' },
              ],
            },
            {
              text: '将来时态',
              items: [
                { text: '一般将来时', link: '/tense/future-simple' },
                { text: '将来进行时', link: '/tense/future-continuous' },
                { text: '将来完成时', link: '/tense/future-perfect' },
                { text: '将来完成进行时', link: '/tense/future-perfect-continuous' },
              ],
            },
            {
              text: '过去将来时态',
              items: [
                { text: '过去将来时', link: '/tense/past-future' },
                { text: '过去将来进行时', link: '/tense/past-future-continuous' },
                { text: '过去将来完成时', link: '/tense/past-future-perfect' },
                { text: '过去将来完成进行时', link: '/tense/past-future-perfect-continuous' },
              ],
            },
            { text: '总结', link: '/tense/summary' },
          ],
        },
      ],
      '/qa/': [
        {
          text: '对话',
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
            {
              text: '后端',
              items: [
                { text: '架构设计', link: '/qa/be/architecture' },
                { text: 'Node.js与框架', link: '/qa/be/nodejs' },
                { text: '数据库与ORM', link: '/qa/be/database' },
                { text: '分布式系统', link: '/qa/be/distributed-systems' },
                { text: '性能优化与缓存', link: '/qa/be/performance' },
                { text: '权限与安全', link: '/qa/be/security' },
                { text: 'DevOps与监控', link: '/qa/be/devops' },
              ],
            },
            {
              text: 'web3',
              items: [
                { text: '智能合约开发', link: '/qa/web3/smart-contracts' },
                { text: '合约安全', link: '/qa/web3/contract-security' },
                { text: 'Web3开发工具', link: '/qa/web3/development-tools' },
                { text: '前端与钱包集成', link: '/qa/web3/frontend-integration' },
                { text: 'DApp架构', link: '/qa/web3/dapp-architecture' },
              ],
            },
            { text: '其他', link: '/qa/other' },
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
      '/phrase/': [
        {
          text: '短语',
          items: [
            { text: '简介', link: '/phrase/intro' },
            { text: 'used to', link: '/phrase/used-to' },
            { text: 'be going to', link: '/phrase/be-going-to' },
            { text: 'IT 长句子', link: '/phrase/it-long-sentences' },
            { text: '其他', link: '/phrase/others' },
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
      '/sentence-pattern/': [
        {
          text: '句型',
          items: [
            { text: '简介', link: '/sentence-pattern/intro' },
            { text: '句子成分', link: '/sentence-pattern/sentence-elements' },
            { text: '句子类型', link: '/sentence-pattern/sentence-types' },
            { text: '从句类型', link: '/sentence-pattern/subordinate-clause' },
            { text: '常用句型', link: '/sentence-pattern/common-sentence' },
          ],
        },
      ],
      '/movies-tv/': [
        {
          text: '影视',
          items: [
            { text: '简介', link: '/movies-tv/intro' },
            {
              text: 'Family Album USA',
              items: [
                { text: '1. 46 Linden Street', link: '/movies-tv/family-album-usa/episode1' },
                { text: '2. The Blind Date', link: '/movies-tv/family-album-usa/episode2' },
                { text: "3. Grandpa's Trunk", link: '/movies-tv/family-album-usa/episode3' },
                { text: '4. A Piece of Cake', link: '/movies-tv/family-album-usa/episode4' },
                { text: '5. The Right Magic', link: '/movies-tv/family-album-usa/episode5' },
                { text: '6. Thanksgiving Day', link: '/movies-tv/family-album-usa/episode6' },
                { text: "7. Man's Best Friend", link: '/movies-tv/family-album-usa/episode7' },
                { text: "8. You're Going to Be Fine", link: '/movies-tv/family-album-usa/episode8' },
                { text: "9. It's Up to You", link: '/movies-tv/family-album-usa/episode9' },
                { text: '10. Smell The Flowers', link: '/movies-tv/family-album-usa/episode10' },
                { text: '11. A Place of Our Own', link: '/movies-tv/family-album-usa/episode11' },
                { text: "12. You're Tops", link: '/movies-tv/family-album-usa/episode12' },
                { text: '13. A Real Stewart', link: '/movies-tv/family-album-usa/episode13' },
                { text: '14. Playing Games', link: '/movies-tv/family-album-usa/episode14' },
                { text: '15. Second Honeymoon', link: '/movies-tv/family-album-usa/episode15' },
                { text: '16. Full of Surprises', link: '/movies-tv/family-album-usa/episode16' },
                { text: '17. Photo Finish', link: '/movies-tv/family-album-usa/episode17' },
                { text: '18. Making a Difference', link: '/movies-tv/family-album-usa/episode18' },
                { text: '19. I Do', link: '/movies-tv/family-album-usa/episode19' },
                { text: '20. Quality Time', link: '/movies-tv/family-album-usa/episode20' },
                { text: '21. A Big Fish in a Little Pond', link: '/movies-tv/family-album-usa/episode21' },
                { text: '22. Career Choices', link: '/movies-tv/family-album-usa/episode22' },
                { text: '23. The Community Center', link: '/movies-tv/family-album-usa/episode23' },
                { text: '24. Parting Friends', link: '/movies-tv/family-album-usa/episode24' },
                { text: '25. Country Music', link: '/movies-tv/family-album-usa/episode25' },
                { text: '26. Opening Night', link: '/movies-tv/family-album-usa/episode26' },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/woai3c/self-learning-english' }],
  },
})
