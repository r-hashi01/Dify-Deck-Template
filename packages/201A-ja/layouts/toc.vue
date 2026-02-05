<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../../theme-dify/components/SlideFooter.vue'
import SlideLogo from '../../theme-dify/components/SlideLogo.vue'
import { parseMarkdown } from '../../theme-dify/utils/markdown'

interface TocItem {
  title: string
  subtitle?: string
  active?: boolean
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: TocItem[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || '目次')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])
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

      <!-- TOC Grid -->
      <div class="flex-grow min-h-0 relative z-10 mt-[1.5rem] flex items-center">
        <div class="grid grid-cols-2 gap-[0.75rem] w-full">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            :class="[
              'flex items-center gap-[1rem] px-[1.25rem] py-[1rem] rounded-lg border-2 transition-all',
              item.active
                ? 'border-[#0033FF] bg-white shadow-sm'
                : 'border-gray-200 bg-white hover:border-gray-300'
            ]"
          >
            <!-- Icon -->
            <div
              :class="[
                'w-[2.5rem] h-[2.5rem] rounded-lg flex items-center justify-center shrink-0',
                item.active ? 'bg-[#0033FF]' : 'bg-gray-100'
              ]"
            >
              <svg
                v-if="item.active"
                class="w-[1.25rem] h-[1.25rem] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              <div
                v-else
                class="w-[1rem] h-[1rem] rounded border-2 border-gray-300"
              ></div>
            </div>

            <!-- Text -->
            <div class="flex flex-col">
              <span
                :class="[
                  'font-bold leading-tight',
                  item.active ? 'text-gray-900 text-[1.1rem]' : 'text-gray-700 text-[1rem]'
                ]"
                v-html="parseMarkdown(item.title)"
              ></span>
              <span
                v-if="item.subtitle"
                :class="[
                  'text-[0.8rem] leading-tight mt-[0.125rem]',
                  item.active ? 'text-[#0033FF] font-medium' : 'text-gray-400'
                ]"
                v-html="parseMarkdown(item.subtitle)"
              ></span>
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
