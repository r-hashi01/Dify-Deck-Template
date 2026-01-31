<script setup lang="ts">
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'

defineProps<{
  subtitle?: string
  website?: string
  email?: string
  github?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()
</script>

<template>
  <div class="flex h-full bg-white relative overflow-hidden">
    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'default'" />

    <!-- Left Side: THANK YOU (Golden Ratio ~61.8%) -->
    <div class="w-[61.8%] h-full bg-white flex flex-col justify-center p-[4.5rem] border-r border-gray-100">
      <h1 class="text-[9rem] font-extrabold leading-[0.77] tracking-tighter text-black mb-[2rem]">
        THANK<br/>YOU
      </h1>
      <div class="w-[6rem] h-[0.75rem] bg-[#0B33F3] mb-[2rem]"></div>
      <p class="text-[1.875rem] text-gray-500 font-light">
        {{ subtitle || $slidev.frontmatter.subtitle || 'Thank you for watching' }}
      </p>
    </div>

    <!-- Right Side: Contact Info (Golden Ratio ~38.2%) -->
    <div class="w-[38.2%] h-full bg-gray-50 flex flex-col justify-center p-[4rem]">
      <div class="flex flex-col gap-[2.5rem]">
        <div class="space-y-[1.5rem]">
          <!-- Website -->
          <a :href="'https://' + (website || 'dify.ai')" class="block group">
            <div class="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest mb-[0.375rem] group-hover:text-[#0B33F3] transition-colors">
              Website
            </div>
            <div class="text-[1.875rem] font-bold text-black group-hover:text-[#0B33F3] transition-colors">
              {{ website || 'dify.ai' }}
            </div>
          </a>

          <!-- Email -->
          <a :href="'mailto:' + (email || 'hello@dify.ai')" class="block group">
            <div class="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest mb-[0.375rem] group-hover:text-[#0B33F3] transition-colors">
              Email
            </div>
            <div class="text-[1.875rem] font-bold text-black group-hover:text-[#0B33F3] transition-colors">
              {{ email || 'hello@dify.ai' }}
            </div>
          </a>

          <!-- GitHub -->
          <a :href="'https://github.com/' + (github || 'langgenius')" class="block group">
            <div class="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest mb-[0.375rem] group-hover:text-[#0B33F3] transition-colors">
              GitHub
            </div>
            <div class="text-[1.875rem] font-bold text-black group-hover:text-[#0B33F3] transition-colors">
              {{ github || 'langgenius' }}
            </div>
          </a>
        </div>

        <!-- QR Code Placeholder / Slot -->
        <div class="w-[10rem] h-[10rem] bg-white p-[0.5rem] border border-gray-200 flex items-center justify-center shadow-sm">
          <slot>
            <div class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-[0.75rem] text-center">
              QR Code
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
