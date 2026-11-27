import { ref } from 'vue'

export type DisplayMode = 'light' | 'dark' | 'amoled'
export type AccentName = 'indigo' | 'violet' | 'emerald' | 'rose' | 'amber' | 'cyan' | 'mono'

export interface AccentPreset {
  id: AccentName
  label: string
  swatch: string
}

export const ACCENT_PRESETS: AccentPreset[] = [
  { id: 'indigo', label: 'Color Swarm', swatch: '#646cff' },
  { id: 'violet', label: 'Nebula Violet', swatch: '#a855f7' },
  { id: 'emerald', label: 'Emerald', swatch: '#10b981' },
  { id: 'cyan', label: 'Cyber Cyan', swatch: '#06b6d4' },
  { id: 'rose', label: 'Crimson Rose', swatch: '#f43f5e' },
  { id: 'amber', label: 'Solar Amber', swatch: '#f59e0b' },
  { id: 'mono', label: 'Monochrome', swatch: '#a1a1aa' }
]

const MODE_KEY = 'brokerlord-display-mode'
const ACCENT_KEY = 'brokerlord-accent'

export const displayMode = ref<DisplayMode>('dark')
export const accentTheme = ref<AccentName>('indigo')

let initialized = false

export function initTheme(isDarkRef?: { value: boolean }) {
  if (typeof window === 'undefined' || initialized) return
  initialized = true

  const savedMode = (localStorage.getItem(MODE_KEY) as DisplayMode | null) || 'dark'
  const savedAccent = (localStorage.getItem(ACCENT_KEY) as AccentName | null) || 'indigo'

  applyDisplayMode(savedMode, isDarkRef)
  applyAccent(savedAccent)
}

export function applyDisplayMode(mode: DisplayMode, isDarkRef?: { value: boolean }) {
  displayMode.value = mode
  if (typeof window === 'undefined') return

  const d = document.documentElement
  if (mode === 'light') {
    d.classList.remove('dark', 'amoled')
    localStorage.setItem('vitepress-theme-appearance', 'light')
    if (isDarkRef) isDarkRef.value = false
  } else if (mode === 'amoled') {
    d.classList.add('dark', 'amoled')
    localStorage.setItem('vitepress-theme-appearance', 'dark')
    if (isDarkRef) isDarkRef.value = true
  } else {
    d.classList.add('dark')
    d.classList.remove('amoled')
    localStorage.setItem('vitepress-theme-appearance', 'dark')
    if (isDarkRef) isDarkRef.value = true
  }
  localStorage.setItem(MODE_KEY, mode)
}

export function cycleDisplayMode(isDarkRef?: { value: boolean }) {
  const order: DisplayMode[] = ['dark', 'amoled', 'light']
  const idx = order.indexOf(displayMode.value)
  const next = order[(idx + 1) % order.length]
  applyDisplayMode(next, isDarkRef)
}

export function applyAccent(accent: AccentName) {
  accentTheme.value = accent
  if (typeof window === 'undefined') return
  document.documentElement.dataset.accent = accent
  localStorage.setItem(ACCENT_KEY, accent)
}

export function openInstantSearch() {
  if (typeof window === 'undefined') return
  const searchBtn = document.querySelector<HTMLButtonElement>('.DocSearch-Button, #local-search button, .VPNavBarSearch button')
  if (searchBtn) {
    searchBtn.click()
    return
  }
  window.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true,
      bubbles: true
    })
  )
}
