<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import { parseMarkdown } from '../utils/markdown'

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  headers?: string[]
  rows?: string[][]
  matrixSize?: 'small' | 'medium' | 'large'
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Comparison Matrix')
const subtitle = computed(() => props.subtitle || '')
const headers = computed(() => props.headers || [])
const rows = computed(() => props.rows || [])
const isWideMatrix = computed(() => headers.value.length >= 5)

// Parse special cell values
const parseCell = (cell: string | boolean | null | undefined) => {
  if (cell == null) {
    return { type: 'text', text: '' }
  }
  // Handle boolean values from YAML
  if (cell === true) {
    return { type: 'yes', text: 'Yes' }
  }
  if (cell === false) {
    return { type: 'no', text: 'No' }
  }
  // Handle string values
  const cellLower = String(cell).toLowerCase()
  if (cell === '✅' || cellLower === 'yes' || cellLower === 'true') {
    return { type: 'yes', text: 'Yes' }
  }
  if (cell === '✖️' || cell === '-' || cellLower === 'no' || cellLower === 'false') {
    return { type: 'no', text: 'No' }
  }
  return { type: 'text', text: String(cell) }
}

// Size presets
const sizePresets = {
  large: { cellPadding: '1.1rem', fontSize: '0.98rem', headerFontSize: '1rem', iconSize: 'w-5 h-5' },
  medium: { cellPadding: '0.85rem', fontSize: '0.88rem', headerFontSize: '0.9rem', iconSize: 'w-4 h-4' },
  small: { cellPadding: '0.68rem', fontSize: '0.8rem', headerFontSize: '0.82rem', iconSize: 'w-4 h-4' },
}

// Determine effective size: manual > auto based on row count
const effectiveSize = computed(() => {
  if (props.matrixSize) return props.matrixSize
  const rowCount = rows.value.length
  if (rowCount <= 4) return 'large'
  if (rowCount <= 7) return 'medium'
  return 'small'
})

const sizeConfig = computed(() => sizePresets[effectiveSize.value])

// For backwards compatibility, also expose individual computed values
const cellPadding = computed(() => sizeConfig.value.cellPadding)
const fontSize = computed(() => sizeConfig.value.fontSize)
const headerFontSize = computed(() => sizeConfig.value.headerFontSize)
const tableClass = computed(() => isWideMatrix.value ? 'table-fixed' : 'table-auto')
const getCellClass = (columnIndex: number) => {
  if (columnIndex === 0) {
    return 'font-semibold text-slate-900'
  }
  return 'text-slate-700'
}
</script>

<template>
  <div class="flex flex-col h-full px-[3rem] pt-[2rem] pb-[4rem] relative overflow-hidden bg-white">
    <!-- Background Pattern (Dot Grid) -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-6">
      <div class="absolute inset-0" style="background-image: radial-gradient(#9CA3AF 1px, transparent 1px); background-size: 2.5rem 2.5rem;"></div>
    </div>

    <!-- Dify Logo Top Right -->
    <SlideLogo :variant="logoVariant || 'default'" />

    <div class="relative z-10 flex flex-col h-full">
      <!-- Header -->
      <div class="flex flex-col items-start w-full">
        <h1 class="text-[3rem] font-extrabold text-[#0033FF] tracking-tight leading-tight" v-html="parseMarkdown(slideTitle)">
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-500 mb-[1rem] border-l-[0.2rem] border-[#0033FF] pl-[0.75rem]" v-html="parseMarkdown(subtitle)">
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Table -->
      <div class="mt-[1rem] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] border border-gray-200 rounded-lg overflow-hidden">
        <table :class="['w-full text-left border-collapse', tableClass]">
          <colgroup v-if="isWideMatrix">
            <col class="w-[16%]">
            <col class="w-[21%]">
            <col class="w-[21%]">
            <col class="w-[21%]">
            <col class="w-[21%]">
          </colgroup>
          <thead>
            <tr class="bg-slate-50 border-b border-slate-200">
              <th
                v-for="(header, i) in headers"
                :key="i"
                :class="[
                  'font-bold text-[#0033FF] align-top',
                  i === 0 ? 'tracking-[0.06em]' : ''
                ]"
                :style="{ padding: cellPadding, fontSize: headerFontSize, lineHeight: 1.25 }"
                v-html="parseMarkdown(header)"
              >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rIdx) in rows"
              :key="rIdx"
              :class="[
                'hover:bg-gray-50 transition-colors',
                rIdx < rows.length - 1 ? 'border-b border-gray-100' : ''
              ]"
            >
              <td
                v-for="(cell, cIdx) in row"
                :key="cIdx"
                :class="['align-top leading-[1.45]', getCellClass(cIdx)]"
                :style="{ padding: cellPadding, fontSize: fontSize }"
              >
                <!-- Yes indicator -->
                <div v-if="parseCell(cell).type === 'yes'" class="text-[#0033FF] font-bold flex items-center">
                  <svg :class="[sizeConfig.iconSize, 'mr-[0.5rem]']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Yes
                </div>
                <!-- No indicator -->
                <div v-else-if="parseCell(cell).type === 'no'" class="text-red-400 flex items-center">
                  <svg :class="[sizeConfig.iconSize, 'mr-[0.5rem]']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No
                </div>
                <!-- Regular text -->
                <span v-else v-html="parseMarkdown(parseCell(cell).text)"></span>
              </td>
            </tr>
          </tbody>
        </table>
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
