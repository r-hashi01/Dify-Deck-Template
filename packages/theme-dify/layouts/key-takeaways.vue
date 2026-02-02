<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

interface TakeawayItem {
  title: string
  description?: string
  icon?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  content?: string[]
  items?: TakeawayItem[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Key Takeaways')
const subtitle = computed(() => props.subtitle || '')
const content = computed(() => props.content || [])
const items = computed(() => props.items || [])

// Grid columns based on item count
const gridCols = computed(() => {
  const count = items.value.length
  if (count <= 2) return 'grid-cols-2'
  if (count <= 3) return 'grid-cols-3'
  return 'grid-cols-3'
})
</script>

<template>
  <div class="flex flex-col h-full px-[3rem] pt-[2rem] pb-[4rem] relative overflow-hidden bg-white">
    <!-- Background Pattern (Dot Grid) -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-20">
      <div class="absolute inset-0" style="background-image: radial-gradient(#9CA3AF 1px, transparent 1px); background-size: 2.5rem 2.5rem;"></div>
    </div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'default'" />

    <div class="relative z-10 flex flex-col h-full">
      <!-- Header -->
      <div class="flex flex-col items-start w-full">
        <h1 class="text-[3rem] font-extrabold text-[#0033FF] tracking-tight leading-tight">
          {{ slideTitle }}
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[0.5rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]">
          {{ subtitle }}
        </h2>

        <!-- Content/Intro Text -->
        <div v-if="content.length > 0" class="mt-[0.75rem] text-[1.1rem] text-gray-600 max-w-4xl leading-relaxed border-l-[0.25rem] border-[#0033FF] pl-[1rem]">
          <p v-for="(text, idx) in content" :key="idx" class="mb-[0.25rem] last:mb-0" v-html="parseMarkdown(text)">
          </p>
        </div>

        <div class="w-full h-px bg-gray-200 mt-[1rem]"></div>
      </div>

      <!-- Cards Grid -->
      <div class="flex-grow min-h-0 mt-[1rem] overflow-y-auto">
        <div v-if="items.length > 0" :class="['grid gap-[1rem]', gridCols]">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="bg-white/80 backdrop-blur-sm rounded-xl p-[1.25rem] border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            <div class="flex items-center justify-between mb-[0.75rem]">
              <!-- Icon -->
              <div class="w-[2.5rem] h-[2.5rem] rounded-lg bg-blue-50 text-[#0033FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" class="w-[1.25rem] h-[1.25rem]"></span>
                <svg v-else class="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <!-- Number -->
              <span class="text-[2rem] font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-300 select-none">
                {{ String(idx + 1).padStart(2, '0') }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-[1.1rem] font-bold text-gray-800 mb-[0.375rem] group-hover:text-[#0033FF] transition-colors" v-html="parseMarkdown(item.title)">
            </h3>

            <!-- Description -->
            <p v-if="item.description" class="text-gray-500 text-[0.875rem] leading-relaxed" v-html="parseMarkdown(item.description)">
            </p>
          </div>
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
