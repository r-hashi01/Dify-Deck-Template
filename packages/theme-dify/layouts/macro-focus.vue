<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { parseMarkdown } from '../utils/markdown'

const props = defineProps<{
  slideTitle?: string
  items?: string[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Key Takeaways')
const items = computed(() => props.items || [])
</script>

<template>
  <div class="flex flex-col h-full justify-center items-center bg-black text-white relative overflow-hidden px-[3rem] pt-[2rem] pb-[4rem]">
    <!-- Solid Black Background -->
    <div class="absolute inset-0 bg-black"></div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'dark-mode'" />

    <div class="relative z-10 max-w-6xl text-center w-full">
      <!-- Blue Line -->
      <div class="mb-[1rem] mx-auto w-[6rem] h-[0.25rem] bg-[#0033FF]"></div>

      <!-- Title -->
      <h1 class="text-[3rem] font-bold mb-[2rem] leading-tight tracking-tight">
        {{ slideTitle }}
      </h1>

      <!-- Content Items -->
      <div v-if="items.length > 0" class="grid grid-cols-1 gap-[0.5rem] text-left max-w-2xl mx-auto">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="bg-white/5 p-[1rem] border-l-[0.25rem] border-[#0033FF] flex items-start"
        >
          <!-- Check Icon -->
          <div class="mr-[1rem] mt-[0.125rem] text-[#0033FF] shrink-0">
            <svg class="w-[1.5rem] h-[1.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-[1.25rem] leading-relaxed text-white/90" v-html="parseMarkdown(item)"></span>
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
