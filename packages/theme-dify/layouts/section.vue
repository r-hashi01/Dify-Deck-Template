<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { parseMarkdown } from '../utils/markdown'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  part?: string
  partNumber?: string | number
  details?: string[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const details = computed(() => props.details || [])

const slideTitle = computed(() => props.slideTitle || 'Section Title')
const subtitle = computed(() => props.subtitle || '')
const part = computed(() => props.part)
const partNumber = computed(() => {
  let num: string | number | undefined | null = props.partNumber

  // If partNumber is not provided, try to extract from part string
  if (num === undefined || num === null) {
    if (part.value) {
      const match = part.value.match(/\d+/)
      num = match ? match[0] : null
    }
  }

  // Return empty string if no number found
  if (num === undefined || num === null || num === '') {
    return ''
  }

  // Convert to number (no zero padding)
  const n = typeof num === 'string' ? parseInt(num, 10) : num
  return isNaN(n) ? '' : String(n)
})
</script>

<template>
  <div class="flex flex-col h-full justify-center items-start px-[4rem] py-[3rem] bg-[#0033FF] text-white relative overflow-hidden">
    <!-- Large Number Indicator (Background) -->
    <div v-if="partNumber !== ''" class="absolute right-0 bottom-0 text-[28rem] font-bold text-white opacity-10 leading-none select-none font-mono translate-y-[20%] translate-x-[10%]">
      {{ partNumber }}
    </div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'white'" />

    <div class="relative z-10 w-full max-w-6xl">
      <!-- Part Label -->
      <div v-if="part || partNumber" class="flex items-center gap-[1rem] mb-[1.5rem]">
        <span class="h-px w-[3rem] bg-white"></span>
        <h2 class="text-[1.125rem] font-bold tracking-[0.3em] uppercase text-white/90">
          <span v-if="part" v-html="parseMarkdown(part)"></span>
          <span v-if="part && partNumber"> </span>
          <span v-if="partNumber">{{ partNumber }}</span>
        </h2>
      </div>

      <!-- Title -->
      <h1 class="text-[5rem] font-extrabold mb-[1.5rem] leading-none tracking-wide" v-html="parseMarkdown(slideTitle)">
      </h1>

      <!-- Subtitle -->
      <h3 v-if="subtitle" class="text-[1.875rem] opacity-90 max-w-4xl leading-relaxed border-l-[0.25rem] border-white pl-[1.5rem]" v-html="parseMarkdown(subtitle)">
      </h3>

      <!-- Details List -->
      <div v-if="details.length > 0" class="mt-[2rem] max-w-3xl">
        <div
          v-for="(detail, idx) in details"
          :key="idx"
          class="py-[0.75rem] border-b border-white/20"
        >
          <span class="text-[1.1rem] text-white/80 font-semibold" v-html="parseMarkdown(detail)"></span>
        </div>
      </div>
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
