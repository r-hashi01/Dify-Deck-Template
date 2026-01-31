<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  part?: string
  partNumber?: string | number
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Section Title')
const subtitle = computed(() => props.subtitle || '')
const part = computed(() => props.part || 'Part 01')
const partNumber = computed(() => {
  if (props.partNumber) return props.partNumber
  // Extract number from part string (e.g., "Part 01" -> "1")
  const match = part.value.match(/\d+/)
  return match ? match[0].replace(/^0+/, '') : '1'
})
</script>

<template>
  <div class="flex flex-col h-full justify-center items-start px-[4rem] py-[3rem] bg-[#0B33F3] text-white relative overflow-hidden">
    <!-- Large Number Indicator (Background) -->
    <div class="absolute right-0 bottom-0 text-[28rem] font-bold text-white opacity-10 leading-none select-none font-mono translate-y-[20%] translate-x-[10%]">
      {{ partNumber }}
    </div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'white'" />

    <div class="relative z-10 w-full max-w-6xl">
      <!-- Part Label -->
      <div class="flex items-center gap-[1rem] mb-[1.5rem]">
        <span class="h-px w-[3rem] bg-white"></span>
        <h2 class="text-[1.125rem] font-bold tracking-[0.3em] uppercase text-white/90">
          {{ part }}
        </h2>
      </div>

      <!-- Title -->
      <h1 class="text-[5rem] font-extrabold mb-[1.5rem] leading-none tracking-wide">
        {{ slideTitle }}
      </h1>

      <!-- Subtitle -->
      <h3 v-if="subtitle" class="text-[1.875rem] opacity-90 max-w-4xl leading-relaxed border-l-[0.25rem] border-white pl-[1.5rem]">
        {{ subtitle }}
      </h3>
    </div>

    <!-- Shared Footer Component (Dark mode) -->
    <SlideFooter
      :deck-name="deckName"
      :copyright="copyright"
      :author-name="authorName"
      :dark="true"
    />
  </div>
</template>
