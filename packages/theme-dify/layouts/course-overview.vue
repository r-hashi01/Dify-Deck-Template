<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  objective?: string
  value?: string
  scope?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Module Overview')
const subtitle = computed(() => props.subtitle || '')
const objective = computed(() => props.objective || '')
const value = computed(() => props.value || '')
const scope = computed(() => props.scope || '')
</script>

<template>
  <div class="flex flex-col h-full px-[3rem] pt-[2rem] pb-[4rem] relative bg-white overflow-hidden">
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

      <!-- Content Area -->
      <div class="flex-1 flex flex-col gap-[1.5rem] mt-[2rem] min-h-0">
        <!-- Objective & Value Cards - Grid -->
        <div class="flex-1 grid grid-cols-2 gap-[1.5rem] min-h-0">
          <!-- Objective Card -->
          <div class="bg-gray-50 border border-gray-200 px-[2.5rem] pt-[2rem] flex flex-col justify-start min-h-0 max-h-[15rem]">
            <div class="mb-[1rem]">
              <h3 class="text-[0.6875rem] font-bold text-[#0B33F3] uppercase tracking-[0.2em] border-b-[0.125rem] border-[#0B33F3] inline-block pb-[0.5rem]">
                Course Objective
              </h3>
            </div>
            <p class="text-[1.4rem] text-gray-900 leading-tight">
              {{ objective }}
            </p>
          </div>

          <!-- Value Card -->
          <div class="bg-[#0B33F3] px-[2.5rem] pt-[2rem] flex flex-col justify-start text-white min-h-0 max-h-[15rem]">
            <div class="mb-[1rem]">
              <h3 class="text-[0.6875rem] font-bold text-white/80 uppercase tracking-[0.2em] border-b-[0.125rem] border-white inline-block pb-[0.5rem]">
                Core Value
              </h3>
            </div>
            <p class="text-[1.4rem] text-white leading-tight">
              {{ value }}
            </p>
          </div>
        </div>

        <!-- Scope Footer -->
        <div class="h-[5rem] bg-white border-t-[0.25rem] border-gray-100 flex items-center pt-[0.5rem] relative shrink-0">
          <div class="absolute left-0 top-0 h-[0.25rem] w-[3rem] bg-[#0B33F3]"></div>
          <span class="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest mr-[1.5rem] shrink-0">Scope</span>
          <p class="text-[1rem] text-gray-600 flex-1">{{ scope }}</p>
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
