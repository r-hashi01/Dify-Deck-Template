<script setup lang="ts">
import { computed } from 'vue'
import SlideLogo from '../components/SlideLogo.vue'
import SlideFooter from '../components/SlideFooter.vue'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  content?: string[]
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'The Origin Story')
const subtitle = computed(() => props.subtitle || '')
const content = computed(() => props.content || [])
</script>

<template>
  <div class="h-full w-full bg-white relative overflow-hidden">
    <div class="flex" style="height: calc(100% - 2.5rem);">
      <!-- Left: Visual / Image Area (50%) -->
      <div class="w-1/2 h-full relative bg-gray-100 overflow-hidden border-r border-gray-200">
        <!-- Noise Overlay for "Retro" feel -->
        <div
          class="absolute inset-0 opacity-10 pointer-events-none z-20"
          style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;)"
        ></div>

        <!-- Visual Content with Grayscale Filter -->
        <div class="w-full h-full grayscale contrast-125 brightness-95 scale-90 transition-all duration-1000 hover:grayscale-0 hover:scale-100 origin-center flex items-center justify-center">
          <slot>
            <div class="text-[5rem]">🚀</div>
          </slot>
        </div>
      </div>

      <!-- Right: Text Area (50%) -->
      <div class="w-1/2 h-full p-[2rem] flex flex-col justify-center relative">
        <!-- Dify Logo Top Right -->
        <SlideLogo :variant="logoVariant || 'default'" />

        <!-- Main Content -->
        <div class="space-y-[1.25rem]">
          <h1 class="text-[2.5rem] font-black tracking-tighter text-[#0B33F3] leading-none">
            {{ slideTitle }}
          </h1>

          <h2 v-if="subtitle" class="text-[1.25rem] font-bold text-gray-900 leading-tight tracking-tight">
            {{ subtitle }}
          </h2>

          <div class="w-[5rem] h-[0.375rem] bg-black"></div>

          <div v-if="content.length > 0" class="text-[0.95rem] text-gray-600 font-serif leading-relaxed">
            <p
              v-for="(paragraph, idx) in content"
              :key="idx"
              class="mb-[1rem] last:mb-0"
            >
              {{ paragraph }}
            </p>
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
