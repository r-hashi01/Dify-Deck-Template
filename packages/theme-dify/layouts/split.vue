<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import BulletList from '../components/BulletList.vue'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  items?: string[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Split Layout')
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
        <h1 class="text-[3.75rem] font-extrabold text-[#0B33F3] tracking-tight leading-tight">
          {{ slideTitle }}
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0B33F3] pl-[1rem]">
          {{ subtitle }}
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Content Area: Split Layout -->
      <div class="flex flex-row gap-[2.5rem] flex-1 items-center justify-center min-h-0 mt-[1.5rem]">
        <!-- Left: Bullet List -->
        <div class="w-1/2 flex flex-col justify-center min-h-0 overflow-auto h-full">
          <BulletList :items="items" size="xs" />
        </div>

        <!-- Right: Visual Content (slot) -->
        <div class="w-1/2 h-full min-h-0 bg-white border border-gray-200 flex items-center justify-center p-[2rem] relative overflow-hidden">
          <div class="relative z-10 w-full h-full flex items-center justify-center">
            <slot>
              <!-- Default placeholder -->
              <div class="text-center">
                <div class="w-[4rem] h-[4rem] mx-auto mb-[1rem] text-[#0B33F3]">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 class="text-[1.25rem] font-bold text-slate-700">Visual Area</h3>
                <p class="text-slate-500">Any content here</p>
              </div>
            </slot>
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
