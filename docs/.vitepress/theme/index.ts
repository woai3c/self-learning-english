import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue' // 确保引入了自定义的 Layout 组件

export default {
  ...DefaultTheme,
  Layout, // 使用自定义的 Layout 组件替换默认主题的 Layout 组件
}
