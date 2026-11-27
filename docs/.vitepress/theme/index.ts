import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import CategoryGrid from './components/CategoryGrid.vue'
import TagBadge from './components/TagBadge.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('CategoryGrid', CategoryGrid)
    app.component('TagBadge', TagBadge)
  }
} satisfies Theme
