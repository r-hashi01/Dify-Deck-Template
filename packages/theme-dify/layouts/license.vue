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
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  content?: string[]
  items?: LicenseItem[]
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
            class="flex flex-col items-center justify-center w-5/12 border-2 border-[#0033FF] rounded-xl bg-blue-50/30 p-[1.5rem] shadow-sm hover:shadow-lg transition-shadow"
          >
            <div class="text-[#0033FF]">
              <span v-if="getIconSvg(baseLicense.icon)" v-html="getIconSvg(baseLicense.icon)" class="w-[2.5rem] h-[2.5rem]"></span>
              <svg v-else class="w-[2.5rem] h-[2.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-[1.5rem] font-bold text-[#0033FF] mb-[0.5rem]" v-html="parseMarkdown(baseLicense.title)"></h3>
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
              class="flex items-start p-[1rem] border-2 border-red-400 rounded-xl bg-red-50/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="mr-[0.75rem] mt-[0.125rem] bg-red-600 text-white rounded-full p-[0.5rem] shrink-0 shadow-sm">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" class="w-[1rem] h-[1rem]"></span>
                <svg v-else class="w-[1rem] h-[1rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 class="text-[1rem] font-bold text-red-700 mb-[0.125rem]" v-html="parseMarkdown(item.title)"></h4>
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
