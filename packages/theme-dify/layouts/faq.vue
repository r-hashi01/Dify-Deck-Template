<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'

interface FAQItem {
  title: string
  description?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: FAQItem[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Frequently Asked Questions')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])

// Dynamic sizing based on item count
const sizeConfig = computed(() => {
  const count = items.value.length
  if (count <= 3) {
    return {
      gap: 'gap-[1.5rem]',
      titleSize: 'text-[1.1rem]',
      descSize: 'text-[0.95rem]',
      barWidth: 'w-[0.375rem]',
      barMargin: 'mr-[1rem]',
    }
  } else if (count <= 6) {
    return {
      gap: 'gap-[1rem]',
      titleSize: 'text-[1rem]',
      descSize: 'text-[0.875rem]',
      barWidth: 'w-[0.3rem]',
      barMargin: 'mr-[0.75rem]',
    }
  } else {
    return {
      gap: 'gap-[0.75rem]',
      titleSize: 'text-[0.9rem]',
      descSize: 'text-[0.8rem]',
      barWidth: 'w-[0.25rem]',
      barMargin: 'mr-[0.5rem]',
    }
  }
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
        <div class="w-full h-px mt-[1rem] bg-gray-200"></div>
      </div>

      <!-- FAQ Grid -->
      <div class="flex-grow min-h-0 mt-[1rem] overflow-y-auto">
        <div :class="['grid grid-cols-2', sizeConfig.gap]">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="flex items-start"
          >
            <!-- Blue Bar -->
            <div :class="['bg-[#0B33F3] rounded-sm shrink-0 self-stretch min-h-[3rem]', sizeConfig.barWidth, sizeConfig.barMargin]"></div>

            <!-- Content -->
            <div class="flex-1">
              <h3 :class="['font-bold text-[#0B33F3] mb-[0.375rem]', sizeConfig.titleSize]">
                {{ item.title }}
              </h3>
              <div :class="['text-gray-700 leading-relaxed', sizeConfig.descSize]">
                {{ item.description }}
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
