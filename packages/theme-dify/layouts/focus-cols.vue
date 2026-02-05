<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

interface FocusItem {
  title: string
  description?: string
  tag?: string
  icon?: string
  color?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: FocusItem[]
  showEmptyIconBox?: boolean
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Focus Columns')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])

// First item is the hero (left side)
const heroItem = computed(() => items.value[0])
// Rest are list items (right side)
const listItems = computed(() => items.value.slice(1))

// Size config based on list items count (right side items = total items - 1)
const sizeConfig = computed(() => {
  const count = listItems.value.length
  if (count <= 2) {
    return {
      gap: 'gap-[0.75rem]',
      padding: 'p-[1rem]',
      iconBox: 'w-[2.5rem] h-[2.5rem]',
      iconSize: 'w-[1.25rem] h-[1.25rem]',
      titleSize: 'text-[1.1rem]',
      descSize: 'text-[0.9rem]',
      rounded: 'rounded-xl',
      itemGap: 'gap-[0.75rem]',
    }
  } else if (count <= 3) {
    return {
      gap: 'gap-[0.5rem]',
      padding: 'p-[0.75rem]',
      iconBox: 'w-[2rem] h-[2rem]',
      iconSize: 'w-[1rem] h-[1rem]',
      titleSize: 'text-[0.95rem]',
      descSize: 'text-[0.8rem]',
      rounded: 'rounded-lg',
      itemGap: 'gap-[0.5rem]',
    }
  } else if (count <= 5) {
    return {
      gap: 'gap-[0.4rem]',
      padding: 'p-[0.5rem]',
      iconBox: 'w-[1.75rem] h-[1.75rem]',
      iconSize: 'w-[0.875rem] h-[0.875rem]',
      titleSize: 'text-[0.85rem]',
      descSize: 'text-[0.7rem]',
      rounded: 'rounded-lg',
      itemGap: 'gap-[0.4rem]',
    }
  } else {
    return {
      gap: 'gap-[0.3rem]',
      padding: 'p-[0.4rem]',
      iconBox: 'w-[1.5rem] h-[1.5rem]',
      iconSize: 'w-[0.75rem] h-[0.75rem]',
      titleSize: 'text-[0.75rem]',
      descSize: 'text-[0.65rem]',
      rounded: 'rounded-md',
      itemGap: 'gap-[0.3rem]',
    }
  }
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
        <h1 class="text-[3rem] font-extrabold text-[#0033FF] tracking-tight leading-tight" v-html="parseMarkdown(slideTitle)">
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]" v-html="parseMarkdown(subtitle)">
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Two Column Layout -->
      <div class="flex-grow min-h-0 relative z-10 mt-[1rem] flex gap-[2rem]">

        <!-- LEFT: Hero/Focus Area -->
        <div class="w-5/12 flex flex-col justify-center relative">
          <div v-if="heroItem" class="relative">
            <!-- Quote Icon Background -->
            <svg class="absolute -top-[2rem] -left-[1.5rem] w-[6rem] h-[6rem] text-blue-100 opacity-80 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div class="relative z-10">
              <!-- Tag -->
              <div class="flex items-center gap-[0.75rem] mb-[1rem]">
                <div v-if="getIconSvg(heroItem.icon) || showEmptyIconBox" class="p-[0.5rem] bg-[#0033FF] text-white rounded-lg w-[2.25rem] h-[2.25rem]">
                  <span v-if="getIconSvg(heroItem.icon)" v-html="getIconSvg(heroItem.icon)" class="w-[1.25rem] h-[1.25rem]"></span>
                </div>
                <span class="text-[#0033FF] font-bold uppercase tracking-widest text-[0.875rem]">
                  {{ heroItem.tag || 'POSITIONING' }}
                </span>
              </div>

              <!-- Hero Title -->
              <h2 class="text-[1.8rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-[1rem]" v-html="parseMarkdown(heroItem.title)">
              </h2>

              <!-- Hero Description -->
              <p v-if="heroItem.description" class="text-[1.25rem] text-gray-600 font-medium leading-relaxed" v-html="parseMarkdown(heroItem.description)">
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: Card List or Custom Content -->
        <div class="w-7/12 flex flex-col justify-center">
          <slot>
            <!-- Default: Card List -->
            <div :class="['flex flex-col', sizeConfig.gap]">
              <div
                v-for="(item, idx) in listItems"
                :key="idx"
                :class="['bg-white border border-gray-200 shadow-sm flex items-start group hover:border-[#0033FF] transition-colors', sizeConfig.padding, sizeConfig.rounded, sizeConfig.itemGap]"
              >
                <!-- Icon Box -->
                <div v-if="getIconSvg(item.icon) || showEmptyIconBox" :class="['rounded-md flex items-center justify-center transition-colors shrink-0', sizeConfig.iconBox, getColorClasses(item.color).bg, getColorClasses(item.color).text]">
                  <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :class="['flex items-center justify-center', sizeConfig.iconSize]"></span>
                </div>

                <!-- Content -->
                <div class="flex-grow min-w-0">
                  <h4 :class="['font-bold text-gray-900 group-hover:text-[#0033FF] transition-colors leading-tight', sizeConfig.titleSize]" v-html="parseMarkdown(item.title)">
                  </h4>
                  <p v-if="item.description" :class="['text-gray-600 leading-snug', sizeConfig.descSize]" v-html="parseMarkdown(item.description)">
                  </p>
                </div>
              </div>
            </div>
          </slot>
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
