<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
  size?: string
}>()

const logoSrc = computed(() => {
  const variant = props.variant || 'default'
  const logos: Record<string, string> = {
    'default': '/assets/icon/dify-logo.svg',
    'white': '/assets/icon/dify-logo-white.svg',
    'black': '/assets/icon/dify-logo-black.svg',
    'dark-mode': '/assets/icon/dify-logo-dark-mode.svg',
    'on-blue': '/assets/icon/dify-logo-on-blue.svg',
  }
  return logos[variant] || logos['default']
})

const sizeClass = computed(() => props.size || 'h-[1.6rem]')
</script>

<template>
  <div class="absolute top-[1.2rem] right-[1.5rem] z-20 pointer-events-none select-none">
    <img :src="logoSrc" alt="Dify" :class="sizeClass" />
  </div>
</template>
