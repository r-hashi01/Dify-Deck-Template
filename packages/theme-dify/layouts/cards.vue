<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

interface CardItem {
  title: string
  description: string
  icon?: string
  color?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: CardItem[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Feature Cards')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])

// Determine grid columns based on item count
const gridCols = computed(() => {
  const count = items.value.length
  if (count <= 2) return 'grid-cols-2'
  if (count <= 4) return 'grid-cols-2'
  if (count <= 6) return 'grid-cols-3'
  return 'grid-cols-4'
})

// Color mapping for icons
const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-500', border: 'border-yellow-100' },
  green: { bg: 'bg-green-50', text: 'text-green-500', border: 'border-green-100' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-500', border: 'border-blue-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-500', border: 'border-purple-100' },
  red: { bg: 'bg-red-50', text: 'text-red-500', border: 'border-red-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-100' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-500', border: 'border-indigo-100' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-500', border: 'border-cyan-100' },
  black: { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-100' },
}

const getColorClasses = (color?: string) => {
  return colorClasses[color || 'blue'] || colorClasses.blue
}
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
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]">
          {{ subtitle }}
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Cards Grid -->
      <div class="flex-grow min-h-0 relative z-10 mt-[1rem] flex items-center">
        <div :class="['grid gap-[1rem] w-full', gridCols]">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="bg-white rounded-sm border border-gray-200 p-[1rem] shadow-sm hover:shadow-md hover:border-[#0033FF] transition-all duration-300 flex flex-col items-start group"
          >
            <!-- Icon Box -->
            <div
              :class="[
                'w-[2.5rem] h-[2.5rem] rounded-sm flex items-center justify-center mb-[0.75rem] border transition-colors shrink-0',
                getColorClasses(item.color).bg,
                getColorClasses(item.color).border,
                getColorClasses(item.color).text
              ]"
            >
              <!-- Custom icon if provided -->
              <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" class="w-[1.25rem] h-[1.25rem]"></span>
              <!-- Default icon -->
              <svg v-else class="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <!-- Title -->
            <div class="text-[1.1rem] font-bold text-gray-900 mb-[0.375rem] leading-tight group-hover:text-[#0033FF] transition-colors" v-html="parseMarkdown(item.title)">
            </div>

            <!-- Description -->
            <div class="text-[0.8rem] text-gray-500 leading-relaxed flex-grow" v-html="parseMarkdown(item.description)">
            </div>
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
