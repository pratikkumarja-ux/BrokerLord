<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted, onUnmounted } from 'vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import HomeHeroExtra from './components/HomeHeroExtra.vue'
import PageFeedback from './components/PageFeedback.vue'
import SiteFooter from './components/SiteFooter.vue'
import { initTheme, openInstantSearch } from './themeStore'

const { Layout } = DefaultTheme
const { isDark } = useData()

function handleGlobalShortcut(e: KeyboardEvent) {
  const target = e.target as HTMLElement | null
  const isTyping =
    target &&
    (target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable)

  if (!isTyping && e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault()
    openInstantSearch()
  }
}

onMounted(() => {
  initTheme(isDark)
  window.addEventListener('keydown', handleGlobalShortcut)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalShortcut)
})
</script>

<template>
  <Layout>
    <!-- Navbar: Light / Dark / AMOLED Switcher + Accent Picker -->
    <template #nav-bar-content-after>
      <ThemeSwitcher />
    </template>

    <!-- Mobile Menu: Display Mode & Accent Switcher -->
    <template #nav-screen-content-after>
      <div class="bl-mobile-theme-wrap">
        <ThemeSwitcher mobile />
      </div>
    </template>

    <!-- Home Hero: Top Update Pill Badge -->
    <template #home-hero-info-before>
      <HomeHeroExtra section="badge" />
    </template>

    <!-- Home Hero: Quick Search Bar + Stats Strip -->
    <template #home-hero-actions-after>
      <HomeHeroExtra section="search" />
    </template>

    <!-- Doc Right Aside: FMHY-style Feedback Widget -->
    <template #aside-outline-after>
      <PageFeedback />
    </template>

    <!-- Doc Footer: Prominent Instagram & Gmail Links on every wiki/category page -->
    <template #doc-after>
      <SiteFooter />
    </template>
  </Layout>
</template>

<style scoped>
.bl-mobile-theme-wrap {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
