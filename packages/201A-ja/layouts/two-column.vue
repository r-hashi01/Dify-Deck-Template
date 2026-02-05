<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../../theme-dify/components/SlideFooter.vue'
import SlideLogo from '../../theme-dify/components/SlideLogo.vue'
import BulletList from '../../theme-dify/components/BulletList.vue'
import { parseMarkdown } from '../../theme-dify/utils/markdown'

// ネスト可能な箇条書き項目
interface BulletItem {
  text: string
  children?: (string | BulletItem)[]
}
type BulletEntry = string | BulletItem

// 各カラムの設定
interface ColumnConfig {
  title?: string
  items?: BulletEntry[]
  description?: string
  imageUrl?: string
  imageAlt?: string
  imageClass?: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  left?: ColumnConfig
  right?: ColumnConfig
  textSize?: 'small' | 'medium' | 'large'
  columnRatio?: '1:1' | '2:1' | '1:2' | '3:2' | '2:3'
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Two Column Layout')
const subtitle = computed(() => props.subtitle || '')
const left = computed(() => props.left || {})
const right = computed(() => props.right || {})

// Column ratio to flex classes
const ratioClasses = computed(() => {
  const ratio = props.columnRatio || '1:1'
  const ratioMap: Record<string, { left: string, right: string }> = {
    '1:1': { left: 'w-1/2', right: 'w-1/2' },
    '2:1': { left: 'w-2/3', right: 'w-1/3' },
    '1:2': { left: 'w-1/3', right: 'w-2/3' },
    '3:2': { left: 'w-3/5', right: 'w-2/5' },
    '2:3': { left: 'w-2/5', right: 'w-3/5' },
  }
  return ratioMap[ratio] || ratioMap['1:1']
})

// Text size presets
const textSizePresets = {
  large: { bullet: 'md' as const, desc: 'text-[1.1rem]', title: 'text-[1.3rem]', space: 'space-y-[1rem]' },
  medium: { bullet: 'sm' as const, desc: 'text-[1rem]', title: 'text-[1.15rem]', space: 'space-y-[0.75rem]' },
  small: { bullet: 'xs' as const, desc: 'text-[0.85rem]', title: 'text-[1rem]', space: 'space-y-[0.5rem]' },
}

// Auto-detect size based on total item count
const effectiveSize = computed(() => {
  if (props.textSize) return props.textSize
  const leftCount = left.value.items?.length || 0
  const rightCount = right.value.items?.length || 0
  const total = leftCount + rightCount
  if (total <= 6) return 'large'
  if (total <= 10) return 'medium'
  return 'small'
})

const sizeConfig = computed(() => textSizePresets[effectiveSize.value])

// Check if column has content
const hasContent = (col: ColumnConfig) => {
  return col.title || (col.items && col.items.length > 0) || col.description || col.imageUrl
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

      <!-- Two Column Content Area -->
      <div class="flex flex-row gap-[2.5rem] flex-1 items-start justify-center min-h-0 mt-[1.5rem]">
        <!-- Left Column -->
        <div :class="[ratioClasses.left, 'flex flex-col min-h-0 h-full']" v-if="hasContent(left)">
          <!-- Column Title -->
          <h3 v-if="left.title" :class="[sizeConfig.title, 'font-bold text-gray-900 mb-[0.75rem] pb-[0.5rem] border-b-2 border-[#0033FF]']" v-html="parseMarkdown(left.title)">
          </h3>

          <!-- Content -->
          <div :class="['flex-1 overflow-auto', sizeConfig.space]">
            <!-- Bullet List -->
            <BulletList v-if="left.items && left.items.length > 0" :items="left.items" :size="sizeConfig.bullet" />

            <!-- Description -->
            <div v-if="left.description" :class="[sizeConfig.desc, 'text-gray-700 leading-relaxed']" v-html="parseMarkdown(left.description)">
            </div>

            <!-- Image -->
            <div v-if="left.imageUrl" class="mt-[1rem]">
              <img
                :src="left.imageUrl"
                :alt="left.imageAlt || ''"
                :class="['max-w-full rounded-lg border border-gray-200', left.imageClass || '']"
              />
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div :class="[ratioClasses.right, 'flex flex-col min-h-0 h-full']" v-if="hasContent(right)">
          <!-- Column Title -->
          <h3 v-if="right.title" :class="[sizeConfig.title, 'font-bold text-gray-900 mb-[0.75rem] pb-[0.5rem] border-b-2 border-[#0033FF]']" v-html="parseMarkdown(right.title)">
          </h3>

          <!-- Content -->
          <div :class="['flex-1 overflow-auto', sizeConfig.space]">
            <!-- Bullet List -->
            <BulletList v-if="right.items && right.items.length > 0" :items="right.items" :size="sizeConfig.bullet" />

            <!-- Description -->
            <div v-if="right.description" :class="[sizeConfig.desc, 'text-gray-700 leading-relaxed']" v-html="parseMarkdown(right.description)">
            </div>

            <!-- Image -->
            <div v-if="right.imageUrl" class="mt-[1rem]">
              <img
                :src="right.imageUrl"
                :alt="right.imageAlt || ''"
                :class="['max-w-full rounded-lg border border-gray-200', right.imageClass || '']"
              />
            </div>
          </div>
        </div>

        <!-- Slot for custom content when no left/right defined -->
        <div v-if="!hasContent(left) && !hasContent(right) && $slots.default" class="w-full">
          <slot />
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
