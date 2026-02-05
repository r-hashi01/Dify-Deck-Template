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
  pillarSize?: 'xs' | 'small' | 'medium' | 'large'
  showEmptyIconBox?: boolean
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

// Size presets
const sizePresets = {
  large: {
    gap: 'gap-[1.5rem]',
    padding: 'p-[1rem]',
    iconBox: 'p-[0.75rem]',
    iconSize: 'w-[1.5rem] h-[1.5rem]',
    titleSize: 'text-[1.1rem]',
    descSize: 'text-[0.85rem]',
    featureSize: 'text-[0.75rem]',
    itemWidth: 'w-[calc(33.333%-1rem)]',
    itemHeight: 'h-[85%]',
    maxCols: 3,
  },
  medium: {
    gap: 'gap-[1rem]',
    padding: 'p-[0.75rem]',
    iconBox: 'p-[0.5rem]',
    iconSize: 'w-[1.25rem] h-[1.25rem]',
    titleSize: 'text-[0.95rem]',
    descSize: 'text-[0.75rem]',
    featureSize: 'text-[0.7rem]',
    itemWidth: 'w-[calc(25%-0.75rem)]',
    itemHeight: 'h-[80%]',
    maxCols: 4,
  },
  small: {
    gap: 'gap-[0.5rem]',
    padding: 'p-[0.6rem]',
    iconBox: 'p-[0.4rem]',
    iconSize: 'w-[1rem] h-[1rem]',
    titleSize: 'text-[1.05rem]',
    descSize: 'text-[0.8rem]',
    featureSize: 'text-[0.7rem]',
    itemWidth: 'w-[calc(25%-0.375rem)]',
    itemHeight: 'min-h-[8.5rem]',
    maxCols: 4,
  },
  xs: {
    gap: 'gap-[0.5rem]',
    padding: 'p-[0.4rem]',
    iconBox: 'p-[0.25rem]',
    iconSize: 'w-[0.75rem] h-[0.75rem]',
    titleSize: 'text-[0.7rem]',
    descSize: 'text-[0.55rem]',
    featureSize: 'text-[0.5rem]',
    itemWidth: 'w-[calc(25%-0.375rem)]',
    itemHeight: 'min-h-[5rem]',
    maxCols: 4,
  },
}

// Determine effective size
const effectiveSize = computed(() => {
  if (props.pillarSize) return props.pillarSize
  const count = items.value.length
  if (count <= 3) return 'large'
  if (count <= 5) return 'medium'
  if (count <= 8) return 'small'
  return 'xs'
})

// Size config based on pillarSize prop or item count
const sizeConfig = computed(() => sizePresets[effectiveSize.value])

// Check if we need to wrap (more than 4 items for medium/large, more than 8 for small)
const needsWrap = computed(() => {
  const count = items.value.length
  if (effectiveSize.value === 'large') return count > 3
  if (effectiveSize.value === 'medium') return count > 4
  return count > 4
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

    <div :class="['relative z-10 flex flex-col', ['small', 'xs'].includes(effectiveSize) ? '' : 'h-full']">
      <!-- Header -->
      <div class="flex flex-col items-start w-full">
        <h1 class="text-[3rem] font-extrabold text-[#0033FF] tracking-tight leading-tight" v-html="parseMarkdown(slideTitle)">
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[0.5rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]" v-html="parseMarkdown(subtitle)">
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
            <h3 class="text-[1.5rem] font-extrabold text-slate-900 leading-tight" v-html="parseMarkdown(positioning)">
            </h3>
          </div>
        </div>
      </div>

      <!-- Pillars -->
      <div :class="[['small', 'xs'].includes(effectiveSize) ? 'grid grid-cols-4' : 'flex flex-wrap flex-grow min-h-0 items-end content-end justify-center mt-[0.5rem]', sizeConfig.gap]">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          :class="['flex flex-col items-center relative group', ['small', 'xs'].includes(effectiveSize) ? '' : (needsWrap ? sizeConfig.itemWidth : 'flex-1'), ['small', 'xs'].includes(effectiveSize) ? '' : sizeConfig.itemHeight]"
        >
          <!-- Pillar Body -->
          <div :class="['flex-1 w-full bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col items-center relative overflow-hidden hover:-translate-y-1 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-300', sizeConfig.padding]">

            <!-- Dot Grid Texture -->
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
                 style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 1.5rem 1.5rem;">
            </div>

            <!-- Top Color Line -->
            <div :class="['absolute top-0 left-0 w-full h-[0.25rem]', getStyle(item, idx).bg]"></div>

            <!-- Content: Horizontal layout for small/xs, vertical for others -->
            <!-- Small/XS: Horizontal Layout (with icon) or Full Width (no icon) -->
            <div v-if="['small', 'xs'].includes(effectiveSize)" :class="['relative z-10 h-full w-full pt-[0.5rem]', (getIconSvg(item.icon) || showEmptyIconBox) ? 'flex items-start gap-[0.5rem]' : '']">
              <!-- Icon Box (Left) - only if icon exists -->
              <div v-if="getIconSvg(item.icon) || showEmptyIconBox" :class="['rounded-sm bg-white border border-gray-100 shadow-sm shrink-0', sizeConfig.iconBox, getStyle(item, idx).text]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :class="sizeConfig.iconSize"></span>
              </div>

              <!-- Text Content -->
              <div :class="(getIconSvg(item.icon) || showEmptyIconBox) ? 'flex-1 min-w-0' : 'w-full'">
                <!-- Title -->
                <h3 :class="['font-black leading-tight tracking-tight', sizeConfig.titleSize, getStyle(item, idx).text, 'mb-[0.125rem]']" v-html="parseMarkdown(item.title)">
                </h3>

                <!-- Description -->
                <p :class="['text-gray-500 leading-snug font-medium', sizeConfig.descSize]" v-html="parseMarkdown(item.description || '')">
                </p>

                <!-- Features List -->
                <div v-if="item.features && item.features.length > 0" class="mt-[0.25rem]">
                  <ul class="space-y-[0.125rem]">
                    <li
                      v-for="(feature, fIdx) in item.features"
                      :key="fIdx"
                      :class="['text-gray-600 flex items-start gap-[0.25rem]', sizeConfig.featureSize]"
                    >
                      <div :class="['rounded-full shrink-0 w-[0.25rem] h-[0.25rem] mt-[0.6em]', getStyle(item, idx).bg]"></div>
                      <span v-html="parseMarkdown(feature)"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Medium/Large: Vertical Layout -->
            <div v-else class="relative z-10 flex flex-col items-center h-full w-full pt-[1rem]">
              <!-- Icon Box -->
              <div v-if="getIconSvg(item.icon) || showEmptyIconBox" :class="['rounded-sm bg-white border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300 mb-[0.75rem]', sizeConfig.iconBox, getStyle(item, idx).text]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :class="sizeConfig.iconSize"></span>
              </div>

              <!-- Title -->
              <h3 :class="['font-black text-center leading-tight tracking-tight mb-[0.5rem]', sizeConfig.titleSize, getStyle(item, idx).text]" v-html="parseMarkdown(item.title)">
              </h3>

              <div class="w-[2rem] h-[0.125rem] bg-gray-100 rounded-full mb-[0.5rem]"></div>

              <!-- Description -->
              <p :class="['text-gray-500 text-center leading-snug font-medium px-[0.25rem]', sizeConfig.descSize]" v-html="parseMarkdown(item.description || '')">
              </p>

              <!-- Features List -->
              <div v-if="item.features && item.features.length > 0" class="mt-auto w-full pt-[0.5rem]">
                <ul class="space-y-[0.25rem]">
                  <li
                    v-for="(feature, fIdx) in item.features"
                    :key="fIdx"
                    :class="['text-gray-600 flex items-center gap-[0.25rem] bg-slate-50 rounded border border-slate-100 p-[0.375rem]', sizeConfig.featureSize]"
                  >
                    <div :class="['rounded-full shrink-0 w-[0.375rem] h-[0.375rem]', getStyle(item, idx).bg]"></div>
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
