<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { parseMarkdown } from '../utils/markdown'

interface FAQItem {
  title: string
  description?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: FAQItem[]
  compact?: boolean
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Frequently Asked Questions')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])
const compact = computed(() => props.compact || false)

// Dynamic sizing based on item count
const gridCols = computed(() => {
  const count = items.value.length
  if (count >= 6) return 'grid-cols-3'
  return 'grid-cols-2'
})

const sizeConfig = computed(() => {
  const count = items.value.length
  if (count <= 3) {
    return {
      gap: 'gap-[1.5rem]',
      titleSize: 'text-[1.1rem]',
      descSize: 'text-[0.95rem]',
      barWidth: 'w-[0.375rem]',
      barMargin: 'mr-[1rem]',
      cardPadding: 'px-[0.75rem] py-[0.875rem]',
      minHeight: 'min-h-[3rem]',
    }
  } else if (count <= 6) {
    return {
      gap: 'gap-[0.75rem]',
      titleSize: 'text-[0.95rem]',
      descSize: 'text-[0.8rem]',
      barWidth: 'w-[0.25rem]',
      barMargin: 'mr-[0.6rem]',
      cardPadding: 'px-[0.625rem] py-[0.625rem]',
      minHeight: 'min-h-[2.4rem]',
    }
  } else {
    return {
      gap: 'gap-[0.75rem]',
      titleSize: 'text-[0.9rem]',
      descSize: 'text-[0.8rem]',
      barWidth: 'w-[0.25rem]',
      barMargin: 'mr-[0.5rem]',
      cardPadding: 'px-[0.5rem] py-[0.5rem]',
      minHeight: 'min-h-[2.2rem]',
    }
  }
})
</script>

<template>
  <div :class="['flex flex-col h-full px-[3rem] relative overflow-hidden bg-white', compact ? 'pt-[1.5rem] pb-[3.5rem]' : 'pt-[2rem] pb-[4rem]']">
    <!-- Background Pattern (Dot Grid) -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-6">
      <div class="absolute inset-0" style="background-image: radial-gradient(#9CA3AF 1px, transparent 1px); background-size: 2.5rem 2.5rem;"></div>
    </div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'default'" />

    <div class="relative z-10 flex flex-col h-full">
      <!-- Header -->
      <div class="flex flex-col items-start w-full">
        <h1 :class="[compact ? 'text-[2.5rem]' : 'text-[3rem]', 'font-extrabold text-[#0033FF] tracking-tight leading-tight']" v-html="parseMarkdown(slideTitle)">
        </h1>
        <h2 v-if="subtitle" :class="[compact ? 'text-[1.2rem] mb-[0.625rem]' : 'text-[1.5rem] mb-[1rem]', 'text-gray-500 border-l-[0.2rem] border-[#0033FF] pl-[0.75rem]']" v-html="parseMarkdown(subtitle)">
        </h2>
        <div :class="['w-full h-px bg-gray-200', compact ? 'mt-[0.5rem]' : 'mt-[1rem]']"></div>
      </div>

      <!-- FAQ Grid -->
      <div :class="['flex-grow min-h-0 overflow-y-auto', compact ? 'mt-[0.625rem]' : 'mt-[1rem]']">
        <div :class="['grid', gridCols, sizeConfig.gap]">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            :class="['flex items-start rounded-lg border border-gray-200 bg-white/80', sizeConfig.cardPadding]"
          >
            <!-- Blue Bar -->
            <div :class="['bg-[#0033FF]/70 rounded-sm shrink-0 self-stretch', sizeConfig.minHeight, sizeConfig.barWidth, sizeConfig.barMargin]"></div>

            <!-- Content -->
            <div class="flex-1">
              <h3 :class="['font-bold text-[#0033FF]', compact ? 'mb-[0.25rem]' : 'mb-[0.375rem]', sizeConfig.titleSize]" v-html="parseMarkdown(item.title)">
              </h3>
              <div :class="['text-gray-700', compact ? 'leading-[1.45]' : 'leading-relaxed', sizeConfig.descSize]" v-html="parseMarkdown(item.description || '')">
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
