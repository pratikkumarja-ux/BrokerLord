<script setup lang="ts">
import { Search, ArrowRight, Sparkles } from 'lucide-vue-next'
import { openInstantSearch } from '../themeStore'

defineProps<{
  section: 'badge' | 'search'
}>()
</script>

<template>
  <!-- Top Announcement Badge (FMHY Signature) -->
  <div v-if="section === 'badge'" class="bl-hero-badge-wrap">
    <a href="/posts/nov-2026" class="bl-hero-badge">
      <Sparkles :size="14" class="bl-hb-icon" />
      <span>November 2026 Updates</span>
      <ArrowRight :size="13" class="bl-hb-arrow" />
    </a>
  </div>

  <!-- Instant Search Bar CTA + Directory Meta -->
  <div v-else class="bl-hero-search-wrap">
    <button type="button" class="bl-hero-search-btn" @click="openInstantSearch">
      <span class="bl-hs-left">
        <Search :size="16" class="bl-hs-icon" />
        <span class="bl-hs-placeholder">Instant search across 180+ free tools, guides & sites...</span>
      </span>
      <span class="bl-hs-keys">
        <kbd>/</kbd>
        <kbd>Ctrl K</kbd>
      </span>
    </button>

    <div class="bl-hero-stats">
      <span><strong>13</strong> Categories</span>
      <span class="bl-dot" />
      <span><strong>180+</strong> Curated Links</span>
      <span class="bl-dot" />
      <span><strong>AMOLED</strong> Ready</span>
      <span class="bl-dot" />
      <span><strong>100%</strong> Free & Open</span>
    </div>
  </div>
</template>

<style scoped>
.bl-hero-badge-wrap {
  margin-bottom: 14px;
  display: flex;
}

.bl-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 13px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
  text-decoration: none;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}

.bl-hero-badge:hover {
  transform: translateY(-1px);
  border-color: var(--vp-c-brand-1);
}

.bl-hb-arrow {
  transition: transform 0.18s ease;
}

.bl-hero-badge:hover .bl-hb-arrow {
  transform: translateX(3px);
}

.bl-hero-search-wrap {
  margin-top: 22px;
  max-width: 520px;
}

.bl-hero-search-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px;
  border-radius: 12px;
  background: var(--bl-card-bg);
  border: 1px solid var(--bl-card-border);
  color: var(--vp-c-text-2);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.18s ease;
}

.bl-hero-search-btn:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
}

.bl-hs-left {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.bl-hs-icon {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.bl-hs-placeholder {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bl-hs-keys {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}

.bl-hs-keys kbd {
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 6px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.bl-hero-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  font-size: 12.5px;
  color: var(--vp-c-text-2);
}

.bl-hero-stats strong {
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.bl-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
}

@media (max-width: 959px) {
  .bl-hero-badge-wrap {
    justify-content: center;
  }
  .bl-hero-search-wrap {
    margin-left: auto;
    margin-right: auto;
  }
  .bl-hero-stats {
    justify-content: center;
  }
}

@media (max-width: 520px) {
  .bl-hs-keys {
    display: none;
  }
}
</style>
