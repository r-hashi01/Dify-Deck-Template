<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  label?: string
  teamName?: string
  tagline?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

// Computed values with defaults
const label = computed(() => props.label || 'Product Primer')
const slideTitle = computed(() => props.slideTitle || 'Title')
const subtitle = computed(() => props.subtitle || '')
const teamName = computed(() => props.teamName || 'Solutions & Customer Success')
const tagline = computed(() => props.tagline || 'Infrastructure for Intuitive LLM App Development')
</script>

<template>
  <div class="flex flex-col h-full justify-center items-start p-[4.5rem] bg-white relative overflow-hidden">
    <!-- Solid Blue Accent Bar Top -->
    <div class="absolute top-0 left-0 w-full h-[1rem] bg-[#0B33F3]"></div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'default'" />

    <div class="relative z-10 max-w-7xl w-full flex flex-col h-full justify-center">
      <div class="mb-[6rem]">
        <!-- Label Badge -->
        <div class="inline-block px-[1rem] py-[0.25rem] border border-black text-black font-bold text-[0.625rem] tracking-[0.2em] uppercase mb-[1rem]">
          {{ label }}
        </div>

        <!-- Title -->
        <h1 class="text-[5.625rem] font-extrabold text-black mb-[1rem] leading-[0.9] tracking-normal uppercase">
          {{ slideTitle }}
        </h1>

        <!-- Blue Accent Line -->
        <div class="w-[4.5rem] h-[0.4rem] bg-[#0B33F3] mb-[1rem]"></div>

        <!-- Subtitle -->
        <h2 class="text-[1.5rem] text-gray-600 font-medium leading-snug max-w-4xl">
          {{ subtitle }}
        </h2>
      </div>

      <!-- Footer Section - Team Info -->
      <div class="mb-[2rem] pt-[0.5rem] border-t border-gray-200 w-full">
        <div>
          <p class="text-[1rem] font-bold text-[#0B33F3] tracking-tight mb-[0.5rem]">
            {{ teamName }}
          </p>
          <p class="text-[0.75rem] text-gray-500">
            {{ tagline }}
          </p>
        </div>
      </div>
    </div>

    <!-- Shared Footer Component -->
    <SlideFooter
      :deck-name="deckName"
      :copyright="copyright"
      :author-name="authorName"
    />
  </div>
</template>
