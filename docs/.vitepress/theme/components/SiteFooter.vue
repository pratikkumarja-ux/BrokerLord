<script setup lang="ts">
import { Instagram, Mail, ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <footer class="bl-doc-footer">
    <div class="bl-df-inner">
      <div class="bl-df-brand">
        <span class="bl-df-title">BrokerLord</span>
        <span class="bl-df-sep">•</span>
        <span class="bl-df-sub">Follow for new curated drops &amp; submit links</span>
      </div>

      <div class="bl-df-links">
        <a
          href="https://www.instagram.com/brokerpratik/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          class="bl-df-pill bl-df-insta"
        >
          <Instagram :size="14" />
          <span>@brokerpratik</span>
          <ExternalLink :size="11" class="bl-df-ext" />
        </a>

        <a
          href="mailto:brokerlordmefoolhe@gmail.com"
          class="bl-df-pill bl-df-mail"
        >
          <Mail :size="14" />
          <span>brokerlordmefoolhe@gmail.com</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bl-doc-footer {
  margin-top: 36px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.bl-df-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 16px 18px;
  border-radius: 14px;
  background: var(--bl-card-bg);
  border: 1px solid var(--bl-card-border);
}

.bl-df-brand {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.bl-df-title {
  font-weight: 800;
  color: var(--vp-c-text-1);
}

.bl-df-sep {
  opacity: 0.45;
}

.bl-df-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.bl-df-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 13px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  text-decoration: none !important;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: transform 0.16s ease, border-color 0.16s ease, color 0.16s ease;
}

.bl-df-pill:hover {
  transform: translateY(-1px);
}

.bl-df-insta:hover {
  border-color: #e1306c;
  color: #f472b6;
}

.bl-df-mail:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.bl-df-ext {
  opacity: 0.6;
}
</style>
