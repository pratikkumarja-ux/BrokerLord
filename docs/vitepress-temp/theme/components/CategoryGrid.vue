<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ShieldCheck,
  Bot,
  Tv,
  Headphones,
  Gamepad2,
  BookOpen,
  Download,
  Code2,
  GraduationCap,
  Smartphone,
  Terminal,
  Globe,
  Sparkles,
  ArrowUpRight
} from 'lucide-vue-next'

interface CategoryCard {
  title: string
  description: string
  link: string
  group: 'core' | 'media' | 'systems'
  count: string
  color: string
  icon: any
}

const categories: CategoryCard[] = [
  {
    title: 'Adblocking / Privacy',
    description: 'Block ads, stop trackers, harden browsers, and protect your digital privacy.',
    link: '/privacy',
    group: 'core',
    count: '18+ tools',
    color: '#34d399',
    icon: ShieldCheck
  },
  {
    title: 'Artificial Intelligence',
    description: 'Open-weight LLMs, local AI runners, image & audio models, and free playgrounds.',
    link: '/ai',
    group: 'core',
    count: '16+ tools',
    color: '#a78bfa',
    icon: Bot
  },
  {
    title: 'Streaming & Video',
    description: '100% legal free movies, documentaries, public film archives, and media players.',
    link: '/video',
    group: 'media',
    count: '15+ sites',
    color: '#f472b6',
    icon: Tv
  },
  {
    title: 'Listening & Audio',
    description: 'Global internet radio, podcasts, royalty-free sound libraries, and free DAWs.',
    link: '/audio',
    group: 'media',
    count: '14+ sites',
    color: '#fb7185',
    icon: Headphones
  },
  {
    title: 'Gaming',
    description: 'Open-source games, indie collections, preservation emulators, and game trackers.',
    link: '/gaming',
    group: 'media',
    count: '15+ sites',
    color: '#38bdf8',
    icon: Gamepad2
  },
  {
    title: 'Reading & Books',
    description: 'Public-domain ebooks, open-access journals, audiobooks, and RSS readers.',
    link: '/reading',
    group: 'media',
    count: '14+ sites',
    color: '#fbbf24',
    icon: BookOpen
  },
  {
    title: 'Free Software',
    description: 'Trusted open-source alternatives for productivity, design, video, and utilities.',
    link: '/downloading',
    group: 'systems',
    count: '18+ apps',
    color: '#60a5fa',
    icon: Download
  },
  {
    title: 'Dev & Internet Tools',
    description: 'Browser extensions, developer sandboxes, web utilities, and self-hosted stacks.',
    link: '/internet-tools',
    group: 'core',
    count: '18+ tools',
    color: '#2dd4bf',
    icon: Code2
  },
  {
    title: 'Educational',
    description: 'University courses, coding roadmaps, interactive math, science, and languages.',
    link: '/educational',
    group: 'core',
    count: '15+ sites',
    color: '#4ade80',
    icon: GraduationCap
  },
  {
    title: 'Android / iOS',
    description: 'FOSS app stores, ad-free mobile utilities, and privacy-respecting phone tools.',
    link: '/mobile',
    group: 'systems',
    count: '14+ apps',
    color: '#a3e635',
    icon: Smartphone
  },
  {
    title: 'Linux / macOS',
    description: 'The $HOME of Linux distros, macOS power utilities, shells, and package managers.',
    link: '/linux-macos',
    group: 'systems',
    count: '15+ tools',
    color: '#fb923c',
    icon: Terminal
  },
  {
    title: 'Non-English',
    description: 'Multilingual public libraries, global news aggregators, and language hubs.',
    link: '/non-english',
    group: 'media',
    count: '12+ sites',
    color: '#c084fc',
    icon: Globe
  },
  {
    title: 'Miscellaneous',
    description: 'Maps, cooking, travel planning, free design assets, and delightfully fun websites.',
    link: '/misc',
    group: 'core',
    count: '15+ sites',
    color: '#e879f9',
    icon: Sparkles
  }
]

const activeGroup = ref<'all' | 'core' | 'media' | 'systems'>('all')

const filtered = computed(() => {
  if (activeGroup.value === 'all') return categories
  return categories.filter((c) => c.group === activeGroup.value)
})
</script>

<template>
  <section class="bl-grid-section">
    <div class="bl-grid-header">
      <div class="bl-grid-title-wrap">
        <span class="bl-grid-divider" />
        <h2 class="bl-grid-heading">Or browse these pages</h2>
        <span class="bl-grid-divider" />
      </div>

      <div class="bl-filter-pills" role="tablist" aria-label="Filter categories">
        <button
          v-for="tab in [
            { id: 'all', label: 'All (13)' },
            { id: 'core', label: 'Privacy, AI & Web' },
            { id: 'media', label: 'Media & Reading' },
            { id: 'systems', label: 'Apps & OS' }
          ]"
          :key="tab.id"
          type="button"
          class="bl-filter-pill"
          :class="{ active: activeGroup === tab.id }"
          @click="activeGroup = tab.id as any"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="bl-cards">
      <a
        v-for="item in filtered"
        :key="item.link"
        :href="item.link"
        class="bl-card"
        :style="{ '--card-accent': item.color }"
      >
        <div class="bl-card-top">
          <div class="bl-card-icon">
            <component :is="item.icon" :size="20" />
          </div>
          <span class="bl-card-count">{{ item.count }}</span>
        </div>

        <div class="bl-card-body">
          <h3 class="bl-card-title">
            {{ item.title }}
            <ArrowUpRight :size="15" class="bl-card-arrow" />
          </h3>
          <p class="bl-card-desc">{{ item.description }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.bl-grid-section {
  max-width: 1152px;
  margin: 12px auto 64px;
  padding: 0 24px;
}

.bl-grid-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.bl-grid-title-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 18px;
}

.bl-grid-divider {
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.bl-grid-heading {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  letter-spacing: 0.02em;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.bl-filter-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.bl-filter-pill {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: var(--bl-card-bg);
  border: 1px solid var(--bl-card-border);
  cursor: pointer;
  transition: all 0.16s ease;
}

.bl-filter-pill:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.bl-filter-pill.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.bl-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.bl-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border-radius: 14px;
  background: var(--bl-card-bg);
  border: 1px solid var(--bl-card-border);
  text-decoration: none !important;
  transition: transform 0.18s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.bl-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    360px circle at top left,
    color-mix(in srgb, var(--card-accent) 12%, transparent),
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.22s ease;
  pointer-events: none;
}

.bl-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--card-accent) 65%, var(--vp-c-divider));
  box-shadow: 0 12px 28px -12px rgba(0, 0, 0, 0.35);
}

.bl-card:hover::before {
  opacity: 1;
}

.bl-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.bl-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--card-accent);
  background: color-mix(in srgb, var(--card-accent) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--card-accent) 28%, transparent);
}

.bl-card-count {
  font-size: 11.5px;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.bl-card-body {
  position: relative;
  z-index: 1;
}

.bl-card-title {
  margin: 0 0 6px !important;
  padding: 0 !important;
  border: none !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.bl-card-arrow {
  opacity: 0.35;
  transition: opacity 0.18s ease, transform 0.18s ease;
  flex-shrink: 0;
}

.bl-card:hover .bl-card-arrow {
  opacity: 1;
  color: var(--card-accent);
  transform: translate(2px, -2px);
}

.bl-card-desc {
  margin: 0 !important;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

@media (max-width: 959px) {
  .bl-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 639px) {
  .bl-cards {
    grid-template-columns: 1fr;
  }
  .bl-grid-section {
    padding: 0 16px;
  }
}
</style>
