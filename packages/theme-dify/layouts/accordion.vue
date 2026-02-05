<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

interface AccordionItem {
  title: string
  description: string
  icon?: string
  color?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: AccordionItem[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Accordion List')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])

// Size configuration based on item count
const sizeConfig = computed(() => {
  const count = items.value.length
  if (count <= 2) {
    return {
      gap: 'gap-[0.4rem]',
      padding: 'p-[0.5rem]',
      paddingBottom: 'pb-[0.4rem]',
      paddingLeft: 'pl-[3rem]',
      iconBox: 'w-[2rem] h-[2rem]',
      iconSize: 'w-[1rem] h-[1rem]',
      iconText: 'text-[0.9rem]',
      iconMargin: 'mr-[0.5rem]',
      titleSize: 'text-[1rem]',
      descSize: 'text-[0.85rem]',
      borderWidth: 'border-l-[0.15rem]',
      descPadding: 'pl-[0.5rem]',
    }
  } else if (count <= 4) {
    return {
      gap: 'gap-[0.3rem]',
      padding: 'p-[0.4rem]',
      paddingBottom: 'pb-[0.35rem]',
      paddingLeft: 'pl-[2.5rem]',
      iconBox: 'w-[1.75rem] h-[1.75rem]',
      iconSize: 'w-[0.875rem] h-[0.875rem]',
      iconText: 'text-[0.8rem]',
      iconMargin: 'mr-[0.4rem]',
      titleSize: 'text-[0.9rem]',
      descSize: 'text-[0.8rem]',
      borderWidth: 'border-l-[0.125rem]',
      descPadding: 'pl-[0.4rem]',
    }
  } else {
    return {
      gap: 'gap-[0.2rem]',
      padding: 'p-[0.3rem]',
      paddingBottom: 'pb-[0.25rem]',
      paddingLeft: 'pl-[2rem]',
      iconBox: 'w-[1.5rem] h-[1.5rem]',
      iconSize: 'w-[0.75rem] h-[0.75rem]',
      iconText: 'text-[0.7rem]',
      iconMargin: 'mr-[0.3rem]',
      titleSize: 'text-[0.8rem]',
      descSize: 'text-[0.7rem]',
      borderWidth: 'border-l-[0.1rem]',
      descPadding: 'pl-[0.3rem]',
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
        <h1 class="text-[3.75rem] font-extrabold text-[#0033FF] tracking-tight leading-tight" v-html="parseMarkdown(slideTitle)">
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]" v-html="parseMarkdown(subtitle)">
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Accordion List (Static - All Expanded) -->
      <div class="flex-grow relative z-10 overflow-hidden mt-[0.75rem]">
        <div :class="['flex flex-col w-full h-full overflow-y-auto pr-[0.5rem]', sizeConfig.gap]">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="bg-white rounded-lg border border-[#0033FF] shadow-sm"
          >
            <!-- Header -->
            <div :class="['flex items-center', sizeConfig.padding]">
              <!-- Icon Box -->
              <div :class="['flex items-center justify-center rounded-lg border shrink-0', sizeConfig.iconBox, sizeConfig.iconMargin, getColorClasses(item.color).bg, getColorClasses(item.color).border]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" :class="[sizeConfig.iconSize, getColorClasses(item.color).text]"></span>
                <span v-else :class="['font-bold', sizeConfig.iconText, getColorClasses(item.color).text]">{{ idx + 1 }}</span>
              </div>

              <!-- Title -->
              <h3 :class="['font-bold text-[#0033FF]', sizeConfig.titleSize]" v-html="parseMarkdown(item.title)">
              </h3>
            </div>

            <!-- Description -->
            <div :class="['px-[0.75rem]', sizeConfig.paddingBottom, sizeConfig.paddingLeft]">
              <p :class="['text-gray-600 leading-relaxed border-[#0033FF]', sizeConfig.descSize, sizeConfig.borderWidth, sizeConfig.descPadding]" v-html="parseMarkdown(item.description)">
              </p>
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
