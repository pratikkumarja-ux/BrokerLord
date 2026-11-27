<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { Sun, Moon, Sparkles, Palette, Check } from 'lucide-vue-next'
import {
  displayMode,
  accentTheme,
  ACCENT_PRESETS,
  applyDisplayMode,
  cycleDisplayMode,
  applyAccent,
  type DisplayMode
} from '../themeStore'

const props = defineProps<{
  mobile?: boolean
}>()

const { isDark } = useData()
const popoverOpen = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

const modeMeta = computed(() => {
  if (displayMode.value === 'amoled') {
    return { label: 'AMOLED', title: 'AMOLED Pure Black — Click to switch mode' }
  }
  if (displayMode.value === 'light') {
    return { label: 'Light', title: 'Light Mode — Click to switch mode' }
  }
  return { label: 'Dark', title: 'Dark Mode — Click to switch to AMOLED' }
})

const modes: { id: DisplayMode; label: string; desc: string }[] = [
  { id: 'light', label: 'Light', desc: 'Crisp daylight' },
  { id: 'dark', label: 'Dark', desc: 'Classic slate' },
  { id: 'amoled', label: 'AMOLED', desc: 'Pure #000000' }
]

function setMode(m: DisplayMode) {
  applyDisplayMode(m, isDark)
}

function handleCycle() {
  cycleDisplayMode(isDark)
}

function handleOutsideClick(e: MouseEvent) {
  if (!popoverOpen.value) return
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    popoverOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <!-- Mobile inline controls -->
  <div v-if="props.mobile" class="bl-theme-mobile">
    <div class="bl-tm-heading">Display Mode</div>
    <div class="bl-mode-grid">
      <button
        v-for="m in modes"
        :key="m.id"
        type="button"
        class="bl-mode-option"
        :class="{ active: displayMode === m.id, amoled: m.id === 'amoled' }"
        @click="setMode(m.id)"
      >
        <Sun v-if="m.id === 'light'" :size="15" />
        <Moon v-else-if="m.id === 'dark'" :size="15" />
        <Sparkles v-else :size="15" />
        <span>{{ m.label }}</span>
      </button>
    </div>

    <div class="bl-tm-heading" style="margin-top: 14px">Accent Color</div>
    <div class="bl-swatch-row">
      <button
        v-for="preset in ACCENT_PRESETS"
        :key="preset.id"
        type="button"
        class="bl-swatch"
        :class="{ active: accentTheme === preset.id }"
        :style="{ '--swatch': preset.swatch }"
        :title="preset.label"
        @click="applyAccent(preset.id)"
      >
        <Check v-if="accentTheme === preset.id" :size="13" />
      </button>
    </div>
  </div>

  <!-- Desktop navbar controls -->
  <div v-else ref="wrapperRef" class="bl-theme-controls">
    <button
      type="button"
      class="bl-mode-pill"
      :class="`is-${displayMode}`"
      :title="modeMeta.title"
      @click="handleCycle"
    >
      <Sun v-if="displayMode === 'light'" :size="14" />
      <Moon v-else-if="displayMode === 'dark'" :size="14" />
      <Sparkles v-else :size="14" />
      <span>{{ modeMeta.label }}</span>
    </button>

    <button
      type="button"
      class="bl-palette-btn"
      :class="{ open: popoverOpen }"
      aria-label="Theme & AMOLED settings"
      title="Theme, AMOLED & Accent Colors"
      @click.stop="popoverOpen = !popoverOpen"
    >
      <Palette :size="16" />
    </button>

    <Transition name="bl-pop">
      <div v-if="popoverOpen" class="bl-theme-popover">
        <div class="bl-pop-section">
          <div class="bl-pop-title">Display Mode</div>
          <div class="bl-mode-grid">
            <button
              v-for="m in modes"
              :key="m.id"
              type="button"
              class="bl-mode-option"
              :class="{ active: displayMode === m.id, amoled: m.id === 'amoled' }"
              @click="setMode(m.id)"
            >
              <Sun v-if="m.id === 'light'" :size="15" />
              <Moon v-else-if="m.id === 'dark'" :size="15" />
              <Sparkles v-else :size="15" />
              <span class="bl-mo-name">{{ m.label }}</span>
              <span class="bl-mo-desc">{{ m.desc }}</span>
            </button>
          </div>
        </div>

        <div class="bl-pop-divider" />

        <div class="bl-pop-section">
          <div class="bl-pop-title">Accent Theme</div>
          <div class="bl-swatch-row">
            <button
              v-for="preset in ACCENT_PRESETS"
              :key="preset.id"
              type="button"
              class="bl-swatch"
              :class="{ active: accentTheme === preset.id }"
              :style="{ '--swatch': preset.swatch }"
              :title="preset.label"
              @click="applyAccent(preset.id)"
            >
              <Check v-if="accentTheme === preset.id" :size="13" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.bl-theme-controls {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid var(--vp-c-divider);
}

.bl-mode-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 11px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
}

.bl-mode-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.bl-mode-pill.is-amoled {
  background: #000000;
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-2);
  box-shadow: 0 0 12px -3px var(--vp-c-brand-1);
}

.bl-palette-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.18s ease;
}

.bl-palette-btn:hover,
.bl-palette-btn.open {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.bl-theme-popover {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 276px;
  padding: 14px;
  border-radius: 14px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.38);
  z-index: 100;
}

.bl-pop-title,
.bl-tm-heading {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-2);
  margin-bottom: 9px;
}

.bl-mode-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.bl-mode-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 9px 6px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.16s ease;
}

.bl-mode-option:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.bl-mode-option.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.bl-mode-option.amoled.active {
  background: #000000;
  color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-1);
}

.bl-mo-name {
  font-size: 12px;
  line-height: 1.2;
}

.bl-mo-desc {
  font-size: 10px;
  font-weight: 500;
  opacity: 0.72;
}

.bl-pop-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 12px 0;
}

.bl-swatch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.bl-swatch {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: var(--swatch);
  border: 2px solid transparent;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.bl-swatch:hover {
  transform: scale(1.12);
}

.bl-swatch.active {
  border-color: var(--vp-c-text-1);
  box-shadow: 0 0 0 2px var(--vp-c-bg-elv);
}

.bl-pop-enter-active,
.bl-pop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.bl-pop-enter-from,
.bl-pop-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}

@media (max-width: 767px) {
  .bl-theme-controls {
    display: none;
  }
}
</style>
