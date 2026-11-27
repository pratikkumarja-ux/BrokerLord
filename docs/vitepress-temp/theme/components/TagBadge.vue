<script setup lang="ts">
defineProps<{
  type?: 'default' | 'foss' | 'privacy' | 'web'
}>()
</script>

<template>
  <span class="bl-tag" :class="type || 'default'"><slot /></span>
</template>
