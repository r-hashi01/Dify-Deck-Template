<script setup lang="ts">
import { computed, useSlots } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

const slots = useSlots()
const hasSlot = computed(() => !!slots.default)

interface CardItem {
  title: string
  description: string
  icon?: string
  color?: string
  tags?: string[]
  details?: string[]
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: CardItem[]
  cardSize?: 'small' | 'medium' | 'large'
  showEmptyIconBox?: boolean
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Feature Cards')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])

// Size presets
const sizePresets = {
  large: {
    gap: 'gap-[0.75rem]',
    padding: 'p-[0.75rem]',
    iconBox: 'w-[2rem] h-[2rem]',
    iconSize: 'w-[1rem] h-[1rem]',
    titleMarginWithIcon: 'mt-[2rem]',
    titleMarginNoIcon: 'mt-[0.25rem]',
    titleSize: 'text-[1.1rem]',
    descSize: 'text-[0.85rem]',
    tagSize: 'text-[0.5rem]',
    bulletSize: 'w-[0.25rem] h-[0.25rem]',
  },
  medium: {
    gap: 'gap-[0.5rem]',
    padding: 'p-[0.5rem]',
    iconBox: 'w-[1.5rem] h-[1.5rem]',
    iconSize: 'w-[0.75rem] h-[0.75rem]',
    titleMarginWithIcon: 'mt-[1.5rem]',
    titleMarginNoIcon: 'mt-[0.25rem]',
    titleSize: 'text-[0.95rem]',
    descSize: 'text-[0.7rem]',
    tagSize: 'text-[0.45rem]',
    bulletSize: 'w-[0.2rem] h-[0.2rem]',
  },
  small: {
    gap: 'gap-[0.375rem]',
    padding: 'p-[0.375rem]',
    iconBox: 'w-[1.25rem] h-[1.25rem]',
    iconSize: 'w-[0.625rem] h-[0.625rem]',
    titleMarginWithIcon: 'mt-[1.25rem]',
    titleMarginNoIcon: 'mt-[0.25rem]',
    titleSize: 'text-[0.8rem]',
    descSize: 'text-[0.65rem]',
    tagSize: 'text-[0.4rem]',
    bulletSize: 'w-[0.15rem] h-[0.15rem]',
  },
}

// Determine size: manual > auto based on count and slot
const effectiveSize = computed(() => {
  if (props.cardSize) return props.cardSize
  const count = items.value.length
  if (hasSlot.value) {
    // Compact when slot is present
    if (count <= 4) return 'medium'
    return 'small'
  }
  // Normal sizing
  if (count <= 4) return 'large'
  if (count <= 6) return 'medium'
  return 'small'
})

// Grid columns based on item count
const gridCols = computed(() => {
  const count = items.value.length
  if (count <= 2) return 'grid-cols-2'
  if (count <= 4) return 'grid-cols-' + count
  if (count <= 6) return 'grid-cols-3'
  return 'grid-cols-4'
})

const sizeConfig = computed(() => ({
  ...sizePresets[effectiveSize.value],
  gridCols: gridCols.value,
}))

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
          <span v-html="parseMarkdown(slideTitle)"></span>
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]">
          <span v-html="parseMarkdown(subtitle)"></span>
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Optional Slot Content Above Cards -->
      <div v-if="hasSlot" class="mt-[0.75rem]">
        <slot></slot>
      </div>

      <!-- Cards Grid -->
      <div :class="['relative z-10 flex items-start', hasSlot ? 'mt-[0.25rem]' : 'mt-[1rem]']">
        <div :class="['grid w-full', sizeConfig.gridCols, sizeConfig.gap]">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            :class="['bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-md hover:border-[#0033FF] transition-all duration-300 flex flex-col items-start group relative', sizeConfig.padding]"
          >
            <!-- Tags -->
            <div v-if="item.tags && item.tags.length > 0" class="absolute top-[0.5rem] right-[0.5rem] flex gap-[0.25rem]">
              <span
                v-for="(tag, tagIdx) in item.tags"
                :key="tagIdx"
                :class="['font-bold uppercase tracking-wider px-[0.4rem] py-[0.125rem] rounded', sizeConfig.tagSize, getColorClasses(item.color).bg, getColorClasses(item.color).text]"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Icon Box -->
            <div
              v-if="getIconSvg(item.icon) || showEmptyIconBox"
              :class="[
                'absolute top-[0.5rem] left-[0.5rem] rounded-sm flex items-center justify-center border transition-colors shrink-0',
                sizeConfig.iconBox,
                getColorClasses(item.color).bg,
                getColorClasses(item.color).border,
                getColorClasses(item.color).text
              ]"
            >
              <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :class="['flex items-center justify-center', sizeConfig.iconSize]"></span>
            </div>

            <!-- Title -->
            <div :class="['font-bold text-gray-900 mb-[0.25rem] leading-tight group-hover:text-[#0033FF] transition-colors', (getIconSvg(item.icon) || showEmptyIconBox) ? sizeConfig.titleMarginWithIcon : sizeConfig.titleMarginNoIcon, sizeConfig.titleSize]" v-html="parseMarkdown(item.title)">
            </div>

            <!-- Description -->
            <div :class="['text-gray-500 leading-relaxed', sizeConfig.descSize]" v-html="parseMarkdown(item.description)">
            </div>

            <!-- Details (Bullet List) -->
            <ul v-if="item.details && item.details.length > 0" class="mt-[0.375rem] w-full flex-grow space-y-[0.125rem]">
              <li
                v-for="(detail, dIdx) in item.details"
                :key="dIdx"
                :class="['flex items-start gap-[0.375rem]', sizeConfig.descSize]"
              >
                <span :class="['rounded-full bg-gray-400 shrink-0 mt-[0.65em]', sizeConfig.bulletSize]"></span>
                <span class="text-gray-600" v-html="parseMarkdown(detail)"></span>
              </li>
            </ul>
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
