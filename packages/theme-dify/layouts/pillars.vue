<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

interface PillarItem {
  title: string
  description?: string
  icon?: string
  color?: string
  features?: string[]
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  positioning?: string
  items?: PillarItem[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Pillars')
const subtitle = computed(() => props.subtitle || '')
const positioning = computed(() => props.positioning || '')
const items = computed(() => props.items || [])

// Color map for pillar colors
const colorMap: Record<string, { text: string, bg: string, border: string }> = {
  'blue': { text: 'text-[#0033FF]', bg: 'bg-[#0033FF]', border: 'border-blue-200' },
  'indigo': { text: 'text-indigo-600', bg: 'bg-indigo-500', border: 'border-indigo-200' },
  'green': { text: 'text-emerald-600', bg: 'bg-emerald-500', border: 'border-emerald-200' },
  'emerald': { text: 'text-emerald-600', bg: 'bg-emerald-500', border: 'border-emerald-200' },
  'yellow': { text: 'text-amber-600', bg: 'bg-amber-500', border: 'border-amber-200' },
  'amber': { text: 'text-amber-600', bg: 'bg-amber-500', border: 'border-amber-200' },
  'red': { text: 'text-rose-600', bg: 'bg-rose-500', border: 'border-rose-200' },
  'rose': { text: 'text-rose-600', bg: 'bg-rose-500', border: 'border-rose-200' },
  'purple': { text: 'text-violet-600', bg: 'bg-violet-500', border: 'border-violet-200' },
  'violet': { text: 'text-violet-600', bg: 'bg-violet-500', border: 'border-violet-200' },
  'cyan': { text: 'text-cyan-600', bg: 'bg-cyan-500', border: 'border-cyan-200' },
  'gray': { text: 'text-gray-600', bg: 'bg-gray-500', border: 'border-gray-200' },
  'orange': { text: 'text-orange-600', bg: 'bg-orange-500', border: 'border-orange-200' },
}

// Default styles for fallback (cycle through)
const defaultStyles = [
  colorMap['blue'],
  colorMap['indigo'],
  colorMap['emerald'],
  colorMap['amber'],
  colorMap['rose'],
  colorMap['violet'],
  colorMap['cyan'],
]

const getStyle = (item: PillarItem, idx: number) => {
  if (item.color && colorMap[item.color]) {
    return colorMap[item.color]
  }
  return defaultStyles[idx % defaultStyles.length]
}

// Size config based on item count
const sizeConfig = computed(() => {
  const count = items.value.length
  if (count <= 3) {
    return {
      gap: 'gap-[1.5rem]',
      padding: 'p-[1rem]',
      iconBox: 'p-[0.75rem]',
      iconSize: 'w-[1.5rem] h-[1.5rem]',
      titleSize: 'text-[1.1rem]',
      descSize: 'text-[0.85rem]',
      featureSize: 'text-[0.75rem]',
    }
  } else {
    return {
      gap: 'gap-[1rem]',
      padding: 'p-[0.75rem]',
      iconBox: 'p-[0.5rem]',
      iconSize: 'w-[1.25rem] h-[1.25rem]',
      titleSize: 'text-[0.95rem]',
      descSize: 'text-[0.75rem]',
      featureSize: 'text-[0.7rem]',
    }
  }
})
</script>

<template>
  <div class="flex flex-col h-full px-[3rem] pt-[2rem] pb-[4rem] relative overflow-hidden bg-slate-50">
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

        <!-- Positioning Hero -->
        <div v-if="positioning" class="mt-[0.75rem] mb-[0.5rem] relative">
          <svg class="absolute -top-[1.5rem] -left-[1.5rem] w-[4rem] h-[4rem] text-blue-100 opacity-80 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div class="relative z-10 flex items-center gap-[1rem]">
            <span class="px-[0.75rem] py-[0.375rem] bg-[#0033FF] text-white rounded-lg text-[0.75rem] font-bold uppercase tracking-widest">
              POSITIONING
            </span>
            <h3 class="text-[1.5rem] font-extrabold text-slate-900 leading-tight">
              {{ positioning }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Pillars -->
      <div :class="['flex-grow min-h-0 flex items-end justify-center mt-[0.5rem]', sizeConfig.gap]">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="flex-1 h-[90%] flex flex-col items-center relative group"
        >
          <!-- Pillar Body -->
          <div :class="['flex-1 w-full bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col items-center relative overflow-hidden hover:-translate-y-1 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-300', sizeConfig.padding]">

            <!-- Dot Grid Texture -->
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
                 style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 1.5rem 1.5rem;">
            </div>

            <!-- Top Color Line -->
            <div :class="['absolute top-0 left-0 w-full h-[0.25rem]', getStyle(item, idx).bg]"></div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col items-center h-full pt-[1rem] w-full">
              <!-- Icon Box -->
              <div :class="['mb-[0.75rem] rounded-sm bg-white border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300', sizeConfig.iconBox, getStyle(item, idx).text]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :class="sizeConfig.iconSize"></span>
                <svg v-else :class="sizeConfig.iconSize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <!-- Title -->
              <h3 :class="['font-black text-center mb-[0.5rem] leading-tight tracking-tight', sizeConfig.titleSize, getStyle(item, idx).text]" v-html="parseMarkdown(item.title)">
              </h3>

              <div class="w-[2rem] h-[0.125rem] bg-gray-100 rounded-full mb-[0.5rem]"></div>

              <!-- Description -->
              <p :class="['text-gray-500 text-center leading-relaxed font-medium px-[0.25rem]', sizeConfig.descSize]" v-html="parseMarkdown(item.description || '')">
              </p>

              <!-- Features List -->
              <div v-if="item.features && item.features.length > 0" class="mt-auto pt-[0.5rem] w-full">
                <ul class="space-y-[0.25rem]">
                  <li
                    v-for="(feature, fIdx) in item.features"
                    :key="fIdx"
                    :class="['text-gray-600 flex items-center gap-[0.375rem] bg-slate-50 p-[0.375rem] rounded-lg border border-slate-100', sizeConfig.featureSize]"
                  >
                    <div :class="['w-[0.375rem] h-[0.375rem] rounded-full shrink-0', getStyle(item, idx).bg]"></div>
                    <span v-html="parseMarkdown(feature)"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Shadow -->
          <div class="absolute -bottom-[1rem] left-1/2 -translate-x-1/2 w-[80%] h-[0.5rem] bg-black/15 blur-lg rounded-full group-hover:w-[90%] transition-all duration-300"></div>
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
