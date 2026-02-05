<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { parseMarkdown } from '../utils/markdown'

interface DetailItem {
  text: string
  children?: string[]
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  details?: (string | DetailItem)[]
  imageUrl?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Content')
const subtitle = computed(() => props.subtitle || '')
const details = computed(() => props.details || [])
const imageUrl = computed(() => props.imageUrl)

// Helper to get text from detail item
const getDetailText = (detail: string | DetailItem): string => {
  return typeof detail === 'string' ? detail : detail.text
}

// Helper to get children from detail item
const getDetailChildren = (detail: string | DetailItem): string[] => {
  return typeof detail === 'string' ? [] : (detail.children || [])
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

      <!-- Content Area: Left details + Right visual -->
      <div class="flex-grow min-h-0 relative z-10 mt-[1rem] flex gap-[2rem]">
        <!-- Left: Details List -->
        <div class="w-1/2 flex flex-col justify-center">
          <div class="space-y-[0.75rem]">
            <template v-for="(detail, index) in details" :key="index">
              <div class="flex items-start gap-[0.75rem]">
                <div class="w-[0.4rem] h-[0.4rem] rounded-full bg-[#0033FF] mt-[0.6rem] shrink-0"></div>
                <div class="flex-1">
                  <span class="text-[1.1rem] text-gray-800 leading-relaxed" v-html="parseMarkdown(getDetailText(detail))"></span>
                  <!-- Children items -->
                  <div v-if="getDetailChildren(detail).length > 0" class="mt-[0.5rem] ml-[1rem] space-y-[0.25rem]">
                    <div v-for="(child, childIndex) in getDetailChildren(detail)" :key="childIndex" class="flex items-start gap-[0.5rem]">
                      <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-gray-400 mt-[0.5rem] shrink-0"></div>
                      <span class="text-[0.95rem] text-gray-600" v-html="parseMarkdown(child)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Right: Visual (slot or image) -->
        <div class="w-1/2 flex items-center justify-center">
          <slot>
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="Visual"
              class="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
            <div v-else class="text-gray-400 text-[1.25rem]">
              Place your visual content here
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
