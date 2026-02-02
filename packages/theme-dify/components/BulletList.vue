<script setup lang="ts">
import { computed } from 'vue'
import { parseMarkdown } from '../utils/markdown'

// 項目の型定義
interface BulletItem {
  text: string
  children?: (string | BulletItem)[]
}
type BulletEntry = string | BulletItem

// フラット化された項目（depth付き）
interface FlatItem {
  text: string
  depth: number
}

const props = defineProps<{
  items: BulletEntry[]
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>()

// Size configurations (all values in rem)
const sizeConfig = {
  xs: {
    containerSpace: 'space-y-[0.25rem]',
    fontSizes: ['text-[1rem]', 'text-[0.875rem]', 'text-[0.8rem]', 'text-[0.75rem]'],
    indents: ['ml-[0]', 'ml-[1rem]', 'ml-[2rem]', 'ml-[3rem]'],
    bulletSizes: ['w-[0.375rem] h-[0.375rem]', 'w-[0.3rem] h-[0.3rem]', 'w-[0.25rem] h-[0.25rem]', 'w-[0.2rem] h-[0.2rem]'],
    bulletOffset: 'mt-[0.55rem]',
    bulletMargin: 'mr-[0.5rem]',
  },
  sm: {
    containerSpace: 'space-y-[0.5rem]',
    fontSizes: ['text-[1.125rem]', 'text-[1rem]', 'text-[0.9rem]', 'text-[0.85rem]'],
    indents: ['ml-[0]', 'ml-[1.5rem]', 'ml-[3rem]', 'ml-[4.5rem]'],
    bulletSizes: ['w-[0.5rem] h-[0.5rem]', 'w-[0.375rem] h-[0.375rem]', 'w-[0.3rem] h-[0.3rem]', 'w-[0.25rem] h-[0.25rem]'],
    bulletOffset: 'mt-[0.57rem]',
    bulletMargin: 'mr-[0.75rem]',
  },
  md: {
    containerSpace: 'space-y-[0.75rem]',
    fontSizes: ['text-[1.25rem]', 'text-[1.125rem]', 'text-[1rem]', 'text-[0.9rem]'],
    indents: ['ml-[0]', 'ml-[2rem]', 'ml-[4rem]', 'ml-[6rem]'],
    bulletSizes: ['w-[0.625rem] h-[0.625rem]', 'w-[0.5rem] h-[0.5rem]', 'w-[0.4rem] h-[0.4rem]', 'w-[0.3rem] h-[0.3rem]'],
    bulletOffset: 'mt-[0.6rem]',
    bulletMargin: 'mr-[1rem]',
  },
  lg: {
    containerSpace: 'space-y-[1.25rem]',
    fontSizes: ['text-[1.6rem]', 'text-[1.25rem]', 'text-[1.1rem]', 'text-[1rem]'],
    indents: ['ml-[0]', 'ml-[2.5rem]', 'ml-[5rem]', 'ml-[7.5rem]'],
    bulletSizes: ['w-[0.75rem] h-[0.75rem]', 'w-[0.5rem] h-[0.5rem]', 'w-[0.4rem] h-[0.4rem]', 'w-[0.35rem] h-[0.35rem]'],
    bulletOffset: 'mt-[0.75rem]',
    bulletMargin: 'mr-[1rem]',
  },
  xl: {
    containerSpace: 'space-y-[1.5rem]',
    fontSizes: ['text-[1.875rem]', 'text-[1.5rem]', 'text-[1.25rem]', 'text-[1.1rem]'],
    indents: ['ml-[0]', 'ml-[3rem]', 'ml-[6rem]', 'ml-[9rem]'],
    bulletSizes: ['w-[0.875rem] h-[0.875rem]', 'w-[0.625rem] h-[0.625rem]', 'w-[0.5rem] h-[0.5rem]', 'w-[0.4rem] h-[0.4rem]'],
    bulletOffset: 'mt-[1rem]',
    bulletMargin: 'mr-[1.25rem]',
  },
}

// Bullet styles for each depth level
const bulletStyles = [
  'rounded-sm bg-[#0033FF]',     // Level 0: blue square
  'rounded-full bg-gray-500',    // Level 1: gray circle
  'rounded-full bg-gray-400',    // Level 2: lighter gray circle
  'rounded-full bg-gray-300',    // Level 3: even lighter
]

// Text colors for each depth level
const textColors = [
  'text-gray-800 font-medium',   // Level 0
  'text-gray-600',               // Level 1
  'text-gray-500',               // Level 2
  'text-gray-500',               // Level 3
]

// ネスト構造をフラット化する関数
const flattenItems = (entries: BulletEntry[], depth: number = 0): FlatItem[] => {
  const result: FlatItem[] = []
  for (const entry of entries) {
    if (typeof entry === 'string') {
      // 文字列の場合：従来のスペースベースの深さ検出もサポート
      const match = entry.match(/^(\s*)/)
      const spaces = match ? match[1].length : 0
      const additionalDepth = Math.floor(spaces / 2)
      result.push({ text: entry.trim(), depth: depth + additionalDepth })
    } else {
      // オブジェクトの場合
      result.push({ text: entry.text, depth })
      if (entry.children && entry.children.length > 0) {
        result.push(...flattenItems(entry.children, depth + 1))
      }
    }
  }
  return result
}

// フラット化された項目リスト
const flatItems = computed(() => flattenItems(props.items))

// Auto-detect size based on total item count
const autoSize = computed(() => {
  const count = flatItems.value.length
  if (count > 10) return 'sm'
  if (count > 6) return 'md'
  return 'lg'
})

const currentSize = computed(() => props.size || autoSize.value)
const config = computed(() => sizeConfig[currentSize.value])

// Dynamic classes based on size
const containerSpace = computed(() => config.value.containerSpace)
const bulletOffset = computed(() => config.value.bulletOffset)
const bulletMargin = computed(() => config.value.bulletMargin)

const isEmpty = (text: string) => text.trim() === ''

// Get styles for a specific depth
const getFontSize = (depth: number) => config.value.fontSizes[Math.min(depth, 3)]
const getIndent = (depth: number) => config.value.indents[Math.min(depth, 3)]
const getBulletSize = (depth: number) => config.value.bulletSizes[Math.min(depth, 3)]
const getBulletStyle = (depth: number) => bulletStyles[Math.min(depth, 3)]
const getTextColor = (depth: number) => textColors[Math.min(depth, 3)]

// Parse Markdown text (supports **bold**, *italic*, `code`, ~~strike~~, [link](url))
const parseText = (text: string) => {
  return parseMarkdown(text, {
    boldClass: 'text-[#0033FF] font-extrabold',
  })
}
</script>

<template>
  <ul :class="[containerSpace, 'w-full']">
    <li
      v-for="(item, idx) in flatItems"
      :key="idx"
      class="flex items-start leading-snug"
      :class="[
        getIndent(item.depth),
        getFontSize(item.depth),
        getTextColor(item.depth),
        item.depth > 0 ? 'mt-1' : ''
      ]"
    >
      <span
        class="shrink-0 flex items-center justify-center"
        :class="[bulletMargin]"
      >
        <div
          v-if="!isEmpty(item.text)"
          :class="[
            getBulletSize(item.depth),
            getBulletStyle(item.depth),
            bulletOffset
          ]"
        ></div>
      </span>
      <span v-if="!isEmpty(item.text)" v-html="parseText(item.text)"></span>
      <span v-else class="invisible">.</span>
    </li>
  </ul>
</template>
