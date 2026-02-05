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

const slideTitle = computed(() => props.slideTitle || 'Chapter Title')
const items = computed(() => props.items || [])
</script>

<template>
  <div class="flex flex-col h-full justify-center items-center bg-[#0033FF] text-white relative overflow-hidden p-[4rem]">
    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'white'" />

    <div class="relative z-10 max-w-6xl text-center w-full">
      <!-- Decorative Line -->
      <div class="mb-[2rem] mx-auto w-[6rem] h-[0.25rem] bg-white"></div>

      <!-- Title -->
      <h1 class="text-[4.375rem] font-bold mb-[2.5rem] leading-none tracking-tight max-w-2xl mx-auto" v-html="parseMarkdown(slideTitle)">
      </h1>

      <!-- Content Items -->
      <div v-if="items.length > 0" class="grid grid-cols-1 gap-[1rem] text-left max-w-3xl mx-auto">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="border-b border-white/30 p-[1.25rem] flex items-center hover:bg-white/10 transition-colors"
        >
          <span class="text-[1.5rem] font-medium text-white" v-html="parseMarkdown(item)"></span>
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
