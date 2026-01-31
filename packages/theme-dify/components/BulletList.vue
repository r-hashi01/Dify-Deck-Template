<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  items: string[]
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>()

// Size configurations (all values in rem)
const sizeConfig = {
  xs: {
    containerSpace: 'space-y-[0.25rem]',
    mainFontSize: 'text-[1rem]',
    subFontSize: 'text-[0.875rem]',
    subIndent: 'ml-[1rem]',
    bulletSize: 'w-[0.375rem] h-[0.375rem]',
    subBulletSize: 'w-[0.25rem] h-[0.25rem]',
    bulletOffset: 'mt-[0.55rem]',
    bulletMargin: 'mr-[0.5rem]',
  },
  sm: {
    containerSpace: 'space-y-[0.5rem]',
    mainFontSize: 'text-[1.125rem]',
    subFontSize: 'text-[1rem]',
    subIndent: 'ml-[1.5rem]',
    bulletSize: 'w-[0.5rem] h-[0.5rem]',
    subBulletSize: 'w-[0.375rem] h-[0.375rem]',
    bulletOffset: 'mt-[0.57rem]',
    bulletMargin: 'mr-[0.75rem]',
  },
  md: {
    containerSpace: 'space-y-[0.75rem]',
    mainFontSize: 'text-[1.25rem]',
    subFontSize: 'text-[1.125rem]',
    subIndent: 'ml-[2rem]',
    bulletSize: 'w-[0.625rem] h-[0.625rem]',
    subBulletSize: 'w-[0.5rem] h-[0.5rem]',
    bulletOffset: 'mt-[0.6rem]',
    bulletMargin: 'mr-[1rem]',
  },
  lg: {
    containerSpace: 'space-y-[1.25rem]',
    mainFontSize: 'text-[1.6rem]',
    subFontSize: 'text-[1.25rem]',
    subIndent: 'ml-[2.5rem]',
    bulletSize: 'w-[0.75rem] h-[0.75rem]',
    subBulletSize: 'w-[0.5rem] h-[0.5rem]',
    bulletOffset: 'mt-[0.75rem]',
    bulletMargin: 'mr-[1rem]',
  },
  xl: {
    containerSpace: 'space-y-[1.5rem]',
    mainFontSize: 'text-[1.875rem]',
    subFontSize: 'text-[1.5rem]',
    subIndent: 'ml-[3rem]',
    bulletSize: 'w-[0.875rem] h-[0.875rem]',
    subBulletSize: 'w-[0.625rem] h-[0.625rem]',
    bulletOffset: 'mt-[1rem]',
    bulletMargin: 'mr-[1.25rem]',
  },
}

// Auto-detect size based on item count if not specified
const autoSize = computed(() => {
  const count = props.items.length
  if (count > 10) return 'sm'
  if (count > 6) return 'md'
  return 'lg'
})

const currentSize = computed(() => props.size || autoSize.value)
const config = computed(() => sizeConfig[currentSize.value])

// Dynamic classes based on size
const containerSpace = computed(() => config.value.containerSpace)
const mainFontSize = computed(() => config.value.mainFontSize)
const subFontSize = computed(() => config.value.subFontSize)
const subIndent = computed(() => config.value.subIndent)
const bulletSize = computed(() => config.value.bulletSize)
const subBulletSize = computed(() => config.value.subBulletSize)
const bulletOffset = computed(() => config.value.bulletOffset)
const bulletMargin = computed(() => config.value.bulletMargin)

// Helper to check if item is sub-item (starts with spaces)
const isSub = (item: string) => item.startsWith('  ')
const isEmpty = (item: string) => item.trim() === ''

// Parse **bold** text
const parseText = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0B33F3] font-extrabold">$1</strong>')
}
</script>

<template>
  <ul :class="[containerSpace, 'w-full']">
    <li
      v-for="(item, idx) in items"
      :key="idx"
      class="flex items-start leading-snug"
      :class="[
        isSub(item) ? [subIndent, subFontSize, 'text-gray-600 mt-1'] : [mainFontSize, 'text-gray-800 font-medium']
      ]"
    >
      <span
        class="shrink-0 flex items-center justify-center"
        :class="[bulletMargin, isSub(item) ? 'text-gray-400' : 'text-[#0B33F3]']"
      >
        <div
          v-if="!isEmpty(item)"
          :class="[
            isSub(item) ? [subBulletSize, 'rounded-full bg-gray-400', bulletOffset] : [bulletSize, 'rounded-sm bg-[#0B33F3]', bulletOffset]
          ]"
        ></div>
      </span>
      <span v-if="!isEmpty(item)" v-html="parseText(item.trim())"></span>
      <span v-else class="invisible">.</span>
    </li>
  </ul>
</template>
