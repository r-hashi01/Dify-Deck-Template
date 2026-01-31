<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  name?: string
  role?: string
  details?: string[]
  imageUrl?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Your Instructor')
const subtitle = computed(() => props.subtitle || '')
const name = computed(() => props.name || 'Your Name')
const role = computed(() => props.role || 'Your Role')
const details = computed(() => props.details || [])
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

      <!-- Content Area -->
      <div class="flex-1 flex flex-row gap-[3rem] items-start justify-center min-h-0 py-[2rem]">
        <!-- Left: Presenter Bio -->
        <div class="w-5/12 flex flex-col justify-center min-h-0">
          <div class="space-y-[1rem]">
            <!-- Name (bold, no bullet) -->
            <div>
              <span class="text-[2.5rem] font-extrabold text-gray-900">{{ name }}</span>
            </div>
            <!-- Additional details -->
            <template v-for="(detail, index) in details" :key="index">
              <div class="flex items-start gap-[0.75rem]">
                <div class="w-[0.4rem] h-[0.4rem] rounded-full bg-[#0B33F3] mt-[0.6rem] shrink-0"></div>
                <span class="text-[1.2rem] text-gray-800">{{ detail }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- Right: Contact Card with Visual -->
        <div class="w-7/12 h-[17.5rem] max-h-[31.25rem] flex items-center justify-center">
          <div class="w-full h-full bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 p-[3rem] relative overflow-hidden flex items-center justify-center group">
            <!-- Decorative circles -->
            <div class="absolute -right-[5rem] -top-[5rem] w-[16rem] h-[16rem] bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
            <div class="absolute -left-[5rem] -bottom-[5rem] w-[20rem] h-[20rem] bg-slate-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>

            <!-- Visual Content (slot or default) -->
            <div class="relative z-10 w-full flex flex-col items-center justify-center">
              <slot>
                <!-- Default: User icon placeholder -->
                <div class="w-[12rem] h-[12rem] rounded-full bg-slate-200 flex items-center justify-center mb-[1.5rem] border-[0.25rem] border-white shadow-lg">
                  <svg class="w-[5rem] h-[5rem] text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </slot>
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
