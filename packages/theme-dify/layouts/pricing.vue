<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'

interface PricingItem {
  title: string
  price?: string
  priceUnit?: string
  description?: string
  features?: string[]
  topBarColor?: string
  badge?: string
  icon?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: PricingItem[]
  bottomBanner?: string
  footerNote?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Pricing Plans')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])

// Check if description should be highlighted (Free, Custom, etc.)
const isHighlightedDescription = (desc: string) => {
  const keywords = ['free', 'custom', 'contact', 'marketplace']
  return keywords.some(k => desc.toLowerCase().includes(k))
}

const isSuccessDescription = (desc: string) => {
  return ['free'].some(k => desc.toLowerCase().includes(k))
}

// Color mapping for top bar
const colorMap: Record<string, string> = {
  'gray': 'bg-gray-400',
  'blue': 'bg-[#0B33F3]',
  'black': 'bg-slate-900',
  'green': 'bg-green-500',
  'red': 'bg-red-500',
  'purple': 'bg-purple-500',
  'orange': 'bg-orange-500',
}

const getTopBarColor = (color?: string) => {
  if (!color) return 'bg-gray-200'
  return colorMap[color] || color
}

// Dynamic sizing based on item count
const cardWidth = computed(() => {
  const count = items.value.length
  if (count <= 2) return 'w-[20rem]'
  if (count <= 3) return 'w-[16rem]'
  return 'w-[14rem]'
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
        <h1 class="text-[3.75rem] font-extrabold text-[#0B33F3] tracking-tight leading-tight">
          {{ slideTitle }}
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0B33F3] pl-[1rem]">
          {{ subtitle }}
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Pricing Cards -->
      <div class="flex-grow min-h-0 flex items-center justify-center mt-[1rem]">
        <div class="flex gap-[1.5rem] justify-center">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            :class="['relative flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300', cardWidth]"
          >
            <!-- Top Color Bar -->
            <div :class="['h-[0.5rem] w-full rounded-t-lg', getTopBarColor(item.topBarColor)]"></div>

            <!-- Badge -->
            <div v-if="item.badge" class="absolute -top-[0.5rem] -right-[0.5rem] z-10">
              <div class="bg-red-500 text-white text-[0.7rem] font-bold px-[0.75rem] py-[0.25rem] shadow-md transform rotate-6 rounded-sm">
                {{ item.badge }}
              </div>
            </div>

            <div class="p-[1.25rem] flex flex-col h-full">
              <!-- Header: Icon + Title -->
              <div class="flex items-center mb-[1rem]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem] text-[#0B33F3]"></span>
                <h3 class="text-[1.25rem] font-bold text-[#0B33F3]">{{ item.title }}</h3>
              </div>

              <!-- Price -->
              <div v-if="item.price" class="mb-[1rem]">
                <span class="text-[2.5rem] font-extrabold text-gray-900">{{ item.price }}</span>
                <span v-if="item.priceUnit" class="text-gray-500 ml-[0.25rem] text-[0.875rem]">{{ item.priceUnit }}</span>
              </div>
              <!-- Or highlighted description (Free, Custom) -->
              <div
                v-else-if="item.description && isHighlightedDescription(item.description)"
                :class="['mb-[1rem] text-[1.75rem] font-bold', isSuccessDescription(item.description) ? 'text-green-600' : 'text-gray-900']"
              >
                {{ item.description }}
              </div>

              <!-- Description (if not highlighted) -->
              <p
                v-if="item.description && item.price && !isHighlightedDescription(item.description)"
                class="text-[0.875rem] text-gray-600 mb-[1rem]"
              >
                {{ item.description }}
              </p>

              <!-- Features List -->
              <ul v-if="item.features" class="space-y-[0.5rem] flex-1">
                <li
                  v-for="(feature, fIdx) in item.features"
                  :key="fIdx"
                  class="flex items-start text-[0.875rem] text-gray-700 font-medium"
                >
                  <div class="mr-[0.5rem] mt-[0.5rem] w-[0.375rem] h-[0.375rem] rounded-full bg-black shrink-0"></div>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Banner -->
      <div
        v-if="bottomBanner"
        class="mt-[1rem] w-full border border-red-400 bg-red-50 p-[0.75rem] rounded-lg flex items-center justify-center text-red-700 font-bold text-[0.9rem] shadow-sm"
      >
        <div class="bg-red-600 text-white rounded-full w-[1.25rem] h-[1.25rem] flex items-center justify-center mr-[0.5rem] text-[0.75rem] font-black">
          !
        </div>
        {{ bottomBanner }}
      </div>

      <!-- Footer Note -->
      <div v-if="footerNote" class="mt-[0.5rem] w-full text-center text-slate-500 text-[0.875rem] font-medium italic">
        {{ footerNote }}
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
