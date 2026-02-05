<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

interface LicenseItem {
  title: string
  description?: string
  icon?: string
  color?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  content?: string[]
  items?: LicenseItem[]
  showEmptyIconBox?: boolean
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Licensing Model')
const subtitle = computed(() => props.subtitle || '')
const content = computed(() => props.content || [])
const items = computed(() => props.items || [])

// First item is base license, rest are restrictions
const baseLicense = computed(() => items.value[0])
const restrictions = computed(() => items.value.slice(1))

// Color mapping for icons
const colorClasses: Record<string, { bg: string, text: string, border: string, solidBg: string, solidText: string }> = {
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-500', border: 'border-yellow-100', solidBg: 'bg-yellow-500', solidText: 'text-white' },
  green: { bg: 'bg-green-50', text: 'text-green-500', border: 'border-green-100', solidBg: 'bg-green-500', solidText: 'text-white' },
  blue: { bg: 'bg-blue-50/30', text: 'text-[#0033FF]', border: 'border-[#0033FF]', solidBg: 'bg-[#0033FF]', solidText: 'text-white' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-500', border: 'border-purple-100', solidBg: 'bg-purple-500', solidText: 'text-white' },
  red: { bg: 'bg-red-50/30', text: 'text-red-700', border: 'border-red-400', solidBg: 'bg-red-600', solidText: 'text-white' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-100', solidBg: 'bg-orange-500', solidText: 'text-white' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-500', border: 'border-indigo-100', solidBg: 'bg-indigo-500', solidText: 'text-white' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-500', border: 'border-cyan-100', solidBg: 'bg-cyan-500', solidText: 'text-white' },
  black: { bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-100', solidBg: 'bg-gray-900', solidText: 'text-white' },
}

const getColorClasses = (color?: string, defaultColor: string = 'blue') => {
  return colorClasses[color || defaultColor] || colorClasses[defaultColor]
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

      <!-- Content Area -->
      <div class="flex-grow min-h-0 flex flex-col items-center justify-center overflow-hidden">
        <!-- Description -->
        <div v-if="content.length > 0" class="text-[1.1rem] text-center font-bold mb-[1rem] max-w-4xl text-gray-800">
          <div v-for="(line, idx) in content" :key="idx" class="mb-[0.25rem]" v-html="parseMarkdown(line)">
          </div>
        </div>

        <!-- License Layout -->
        <div class="flex items-center justify-center w-full max-w-6xl gap-[1.5rem]">
          <!-- Left: Base License -->
          <div
            v-if="baseLicense"
            :class="['flex flex-col items-center justify-center w-5/12 border-2 rounded-xl p-[1.5rem] shadow-sm hover:shadow-lg transition-shadow', getColorClasses(baseLicense.color, 'blue').border, getColorClasses(baseLicense.color, 'blue').bg]"
          >
            <div v-if="getIconSvg(baseLicense.icon) || showEmptyIconBox" :class="['w-[2.5rem] h-[2.5rem]', getColorClasses(baseLicense.color, 'blue').text]">
              <span v-if="getIconSvg(baseLicense.icon)" v-html="getIconSvg(baseLicense.icon)" class="w-[2.5rem] h-[2.5rem]"></span>
            </div>
            <h3 :class="['text-[1.5rem] font-bold mb-[0.5rem]', getColorClasses(baseLicense.color, 'blue').text]" v-html="parseMarkdown(baseLicense.title)"></h3>
            <p class="text-gray-600 font-medium text-[0.9rem] text-center" v-html="parseMarkdown(baseLicense.description || '')"></p>
          </div>

          <!-- Plus Sign -->
          <div class="text-gray-300 shrink-0">
            <svg class="w-[2rem] h-[2rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>

          <!-- Right: Restrictions -->
          <div class="flex flex-col gap-[0.75rem] w-7/12">
            <div
              v-for="(item, idx) in restrictions"
              :key="idx"
              :class="['flex items-start p-[1rem] border-2 rounded-xl shadow-sm hover:shadow-md transition-shadow', getColorClasses(item.color, 'red').border, getColorClasses(item.color, 'red').bg]"
            >
              <div v-if="getIconSvg(item.icon) || showEmptyIconBox" :class="['mr-[0.75rem] mt-[0.125rem] rounded-full p-[0.5rem] shrink-0 shadow-sm', getColorClasses(item.color, 'red').solidBg, getColorClasses(item.color, 'red').solidText]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" class="w-[1rem] h-[1rem]"></span>
              </div>
              <div>
                <h4 :class="['text-[1rem] font-bold mb-[0.125rem]', getColorClasses(item.color, 'red').text]" v-html="parseMarkdown(item.title)"></h4>
                <p class="text-gray-600 leading-relaxed text-[0.85rem]" v-html="parseMarkdown(item.description || '')"></p>
              </div>
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
