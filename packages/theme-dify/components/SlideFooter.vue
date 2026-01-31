<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  deckName?: string
  copyright?: string
  authorName?: string
  dark?: boolean
}>()

const deckName = computed(() => props.deckName || 'SLIDE DECK')
const copyright = computed(() => props.copyright || 'Copyright © Dify Tech Inc. All Rights Reserved.')
const authorName = computed(() => props.authorName || 'Your Name')
const currentYear = new Date().getFullYear()
const isDark = computed(() => props.dark || false)
</script>

<template>
  <!-- Bottom Overlays -->
  <!-- BOTTOM LEFT: Deck Info -->
  <div
    class="absolute bottom-[1.5rem] left-[3rem] text-[0.75rem] font-medium tracking-wide pointer-events-none select-none"
    :class="isDark ? 'text-white/80' : 'text-gray-500'"
  >
    <span class="uppercase tracking-wider font-bold">{{ deckName }}</span>
  </div>

  <!-- BOTTOM CENTER: Copyright -->
  <div
    class="absolute bottom-[1.5rem] left-1/2 -translate-x-1/2 text-[0.5625rem] font-medium tracking-wide pointer-events-none select-none"
    :class="isDark ? 'text-white/50' : 'text-gray-400'"
  >
    {{ copyright }}
  </div>

  <!-- BOTTOM RIGHT: Year, Speaker & Page Number -->
  <div class="absolute bottom-[1.5rem] right-[3rem] flex items-center gap-[1.5rem] pointer-events-none select-none">
    <span
      class="text-[0.75rem] font-medium"
      :class="isDark ? 'text-white/70' : 'text-gray-400'"
    >
      {{ currentYear }}
    </span>
    <span
      class="h-[1rem] w-px"
      :class="isDark ? 'bg-white/30' : 'bg-gray-300'"
    ></span>
    <span
      class="text-[0.75rem] font-medium"
      :class="isDark ? 'text-white/80' : 'text-gray-500'"
    >
      {{ authorName }}
    </span>
    <span
      class="h-[1rem] w-px"
      :class="isDark ? 'bg-white/30' : 'bg-gray-300'"
    ></span>
    <span
      class="text-[0.875rem] font-mono font-bold"
      :class="isDark ? 'text-white' : 'text-[#0B33F3]'"
    >
      {{ $slidev.nav.currentPage }}
      <span :class="isDark ? 'text-white/50' : 'text-gray-300'" class="font-light">/</span>
      {{ $slidev.nav.total }}
    </span>
  </div>

  <!-- Progress Bar at Bottom -->
  <div
    class="absolute bottom-0 left-0 w-full h-[0.25rem]"
    :class="isDark ? 'bg-white/20' : 'bg-gray-200'"
  >
    <div
      class="h-full bg-[#0B33F3] transition-all duration-300 ease-out"
      :style="{ width: `${($slidev.nav.currentPage / $slidev.nav.total) * 100}%` }"
    ></div>
  </div>
</template>
