<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { ThumbsUp, MessageSquarePlus, CheckCircle2 } from 'lucide-vue-next'

const route = useRoute()
const voted = ref<'helpful' | 'suggest' | null>(null)

watch(
  () => route.path,
  () => {
    voted.value = null
  }
)
</script>

<template>
  <div class="bl-feedback">
    <div class="bl-fb-title">Got feedback?</div>
    <p class="bl-fb-desc">
      We'd love to know what you think about this page or if a link needs updating.
    </p>

    <div v-if="!voted" class="bl-fb-actions">
      <button type="button" class="bl-fb-btn" @click="voted = 'helpful'">
        <ThumbsUp :size="13" />
        <span>Helpful</span>
      </button>
      <a href="/other/contributing" class="bl-fb-btn" @click="voted = 'suggest'">
        <MessageSquarePlus :size="13" />
        <span>Suggest</span>
      </a>
    </div>

    <div v-else class="bl-fb-thanks">
      <CheckCircle2 :size="15" />
      <span>Thanks for helping improve BrokerLord!</span>
    </div>
  </div>
</template>

<style scoped>
.bl-feedback {
  margin-top: 24px;
  padding: 14px;
  border-radius: 12px;
  background: var(--bl-card-bg);
  border: 1px solid var(--bl-card-border);
}

.bl-fb-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.bl-fb-desc {
  margin: 0 0 12px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.bl-fb-actions {
  display: flex;
  gap: 8px;
}

.bl-fb-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.16s ease, color 0.16s ease;
}

.bl-fb-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.bl-fb-thanks {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>
