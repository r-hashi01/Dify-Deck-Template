<script setup lang="ts">
import { computed, ref } from 'vue'
import SlideFooter from '../../theme-dify/components/SlideFooter.vue'
import SlideLogo from '../../theme-dify/components/SlideLogo.vue'
import TerminalBlock from '../../theme-dify/components/TerminalBlock.vue'
import { getIconSvg } from '../../theme-dify/utils/icons'
import { parseMarkdown } from '../../theme-dify/utils/markdown'

// 詳細項目の型
interface DetailItem {
  text: string
  children?: string[]
}
type DetailEntry = string | DetailItem

// ポップアップの機能項目
interface PopupFeature {
  title: string
  description: string
}

// ターミナル行の型
interface TerminalLine {
  type: 'command' | 'output'
  text: string
}

// ターミナル設定の型
interface TerminalConfig {
  title?: string
  lines: TerminalLine[]
}

// ハイライトカードの型
interface HighlightItem {
  icon: string
  title: string
  subtitle?: string
  features?: string[]
  color?: string
  badge?: string  // タイトル横のバッジ (e.g., "Partner", "Dify Official")
  badgeColor?: string  // バッジの色 (デフォルトはcolorと同じ、'dark'で黒)
  link?: string
  // ポップアップ関連
  popup?: {
    title?: string
    description?: string
    features?: PopupFeature[]
    hint?: string
    linkText?: string
  }
}

// モーダルの状態管理
const activeModal = ref<HighlightItem | null>(null)
const openModal = (item: HighlightItem) => {
  if (item.popup) {
    activeModal.value = item
  }
}
const closeModal = () => {
  activeModal.value = null
}

// カラーマップ
const colorMap: Record<string, { bg: string, icon: string, title: string, featureBg: string }> = {
  'blue': { bg: 'bg-blue-50', icon: 'text-blue-500', title: 'text-blue-700', featureBg: 'bg-blue-100' },
  'purple': { bg: 'bg-purple-50', icon: 'text-purple-500', title: 'text-purple-700', featureBg: 'bg-purple-100' },
  'green': { bg: 'bg-emerald-50', icon: 'text-emerald-500', title: 'text-emerald-700', featureBg: 'bg-emerald-100' },
  'red': { bg: 'bg-rose-50', icon: 'text-rose-500', title: 'text-rose-700', featureBg: 'bg-rose-100' },
  'orange': { bg: 'bg-orange-50', icon: 'text-orange-500', title: 'text-orange-700', featureBg: 'bg-orange-100' },
  'cyan': { bg: 'bg-cyan-50', icon: 'text-cyan-500', title: 'text-cyan-700', featureBg: 'bg-cyan-100' },
  'indigo': { bg: 'bg-indigo-50', icon: 'text-indigo-500', title: 'text-indigo-700', featureBg: 'bg-indigo-100' },
  'gray': { bg: 'bg-gray-50', icon: 'text-gray-500', title: 'text-gray-700', featureBg: 'bg-gray-100' },
}

const getHighlightStyle = (color?: string) => {
  return colorMap[color || 'blue'] || colorMap['blue']
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  name?: string
  details?: DetailEntry[]
  description?: string
  imageUrl?: string
  highlights?: HighlightItem[]
  terminal?: TerminalConfig
  textSize?: 'small' | 'medium' | 'large'
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

// Helper to check if detail is object with children
const isDetailItem = (detail: DetailEntry): detail is DetailItem => {
  return typeof detail === 'object' && 'text' in detail
}
const getDetailText = (detail: DetailEntry): string => {
  return isDetailItem(detail) ? detail.text : detail
}
const getDetailChildren = (detail: DetailEntry): string[] => {
  return isDetailItem(detail) ? (detail.children || []) : []
}

const slideTitle = computed(() => props.slideTitle || 'Your Instructor')
const subtitle = computed(() => props.subtitle || '')
const name = computed(() => props.name)
const details = computed(() => props.details || [])
const description = computed(() => props.description || '')
const imageUrl = computed(() => props.imageUrl)
const highlights = computed(() => props.highlights || [])
const terminal = computed(() => props.terminal)

// Dynamic text sizing based on total item count (including children) or manual textSize prop
const detailsCount = computed(() => {
  let count = 0
  for (const detail of details.value) {
    count++
    if (isDetailItem(detail) && detail.children) {
      count += detail.children.length
    }
  }
  return count
})

// Text size presets
const textSizePresets = {
  large: { name: 'text-[1.25rem]', detail: 'text-[1.1rem]', desc: 'text-[1.1rem]', space: 'space-y-[1rem]' },
  medium: { name: 'text-[1.1rem]', detail: 'text-[1rem]', desc: 'text-[1rem]', space: 'space-y-[0.75rem]' },
  small: { name: 'text-[0.95rem]', detail: 'text-[0.85rem]', desc: 'text-[0.85rem]', space: 'space-y-[0.5rem]' },
}

const nameSize = computed(() => {
  if (props.textSize) return textSizePresets[props.textSize].name
  if (detailsCount.value <= 2) return textSizePresets.large.name
  if (detailsCount.value <= 4) return textSizePresets.medium.name
  return textSizePresets.small.name
})
const detailSize = computed(() => {
  if (props.textSize) return textSizePresets[props.textSize].detail
  if (detailsCount.value <= 2) return textSizePresets.large.detail
  if (detailsCount.value <= 4) return textSizePresets.medium.detail
  return textSizePresets.small.detail
})
const descriptionSize = computed(() => {
  if (props.textSize) return textSizePresets[props.textSize].desc
  if (detailsCount.value <= 2) return textSizePresets.large.desc
  if (detailsCount.value <= 4) return textSizePresets.medium.desc
  return textSizePresets.small.desc
})
const spacing = computed(() => {
  if (props.textSize) return textSizePresets[props.textSize].space
  if (detailsCount.value <= 2) return textSizePresets.large.space
  if (detailsCount.value <= 4) return textSizePresets.medium.space
  return textSizePresets.small.space
})

// Dynamic sizing for highlights
const highlightsCount = computed(() => highlights.value.length)
const highlightConfig = computed(() => {
  if (highlightsCount.value <= 2) {
    return {
      gap: 'space-y-[1rem]',
      padding: 'p-[1rem]',
      iconSize: 'w-[2.5rem] h-[2.5rem]',
      titleSize: 'text-[1.25rem]',
      subtitleSize: 'text-[0.9rem]',
      featureSize: 'text-[0.75rem]',
    }
  }
  if (highlightsCount.value <= 4) {
    return {
      gap: 'space-y-[0.5rem]',
      padding: 'p-[0.75rem]',
      iconSize: 'w-[2rem] h-[2rem]',
      titleSize: 'text-[1rem]',
      subtitleSize: 'text-[0.8rem]',
      featureSize: 'text-[0.7rem]',
    }
  }
  return {
    gap: 'space-y-[0.375rem]',
    padding: 'p-[0.5rem]',
    iconSize: 'w-[1.5rem] h-[1.5rem]',
    titleSize: 'text-[0.9rem]',
    subtitleSize: 'text-[0.75rem]',
    featureSize: 'text-[0.65rem]',
  }
})
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
        <h1 class="text-[3rem] font-extrabold text-[#0033FF] tracking-tight leading-tight">
          {{ slideTitle }}
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]">
          {{ subtitle }}
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Content Area -->
      <div class="flex flex-row gap-[3rem] items-start min-h-0 mt-[0.5rem]">
        <!-- Left: Presenter Bio -->
        <div class="w-7/12">
          <div :class="spacing">
            <!-- Name (smaller) -->
            <div v-if="name">
              <span :class="[nameSize, 'font-bold text-[#0033FF]']" v-html="parseMarkdown(name)"></span>
            </div>
            <!-- Additional details -->
            <template v-for="(detail, index) in details" :key="index">
              <div>
                <!-- Parent item -->
                <div class="flex items-start gap-[0.75rem]">
                  <div class="w-[0.4rem] h-[0.4rem] rounded-full bg-[#0033FF] mt-[0.6rem] shrink-0"></div>
                  <span :class="[detailSize, 'text-gray-800']" v-html="parseMarkdown(getDetailText(detail))"></span>
                </div>
                <!-- Children items -->
                <div v-if="getDetailChildren(detail).length > 0" class="ml-[1.5rem] mt-[0.25rem] space-y-[0.25rem]">
                  <div v-for="(child, childIndex) in getDetailChildren(detail)" :key="childIndex" class="flex items-start gap-[0.5rem]">
                    <div class="w-[0.3rem] h-[0.3rem] rounded-full bg-gray-400 mt-[0.7rem] shrink-0"></div>
                    <span :class="[detailSize, 'text-gray-800 text-[0.9em]']" v-html="parseMarkdown(child)"></span>
                  </div>
                </div>
              </div>
            </template>
            <!-- Description (new) -->
            <div v-if="description" :class="[descriptionSize, 'text-gray-900 leading-relaxed font-extrabold w-11/12']" v-html="parseMarkdown(description)">
            </div>
          </div>
        </div>

        <!-- Right: Visual Area -->
        <div class="w-7/12 flex items-center justify-center">
          <!-- Highlights Cards -->
          <div v-if="highlights.length > 0" :class="['w-full', highlightConfig.gap]">
            <component
              :is="item.link && !item.popup ? 'a' : 'div'"
              v-for="(item, idx) in highlights"
              :key="idx"
              :href="item.link && !item.popup ? item.link : undefined"
              :target="item.link && !item.popup ? '_blank' : undefined"
              :rel="item.link && !item.popup ? 'noopener noreferrer' : undefined"
              @click="item.popup ? openModal(item) : undefined"
              :class="[
                'flex items-center gap-[0.75rem] rounded-xl border no-underline',
                highlightConfig.padding,
                getHighlightStyle(item.color).bg,
                (item.link || item.popup) ? 'cursor-pointer hover:shadow-md hover:scale-[1.02] transition-all duration-200' : ''
              ]"
            >
              <!-- Icon -->
              <div :class="[highlightConfig.iconSize, 'shrink-0', getHighlightStyle(item.color).icon]">
                <span v-if="getIconSvg(item.icon)" v-html="getIconSvg(item.icon)" class="w-full h-full"></span>
              </div>
              <!-- Text -->
              <div class="flex flex-col flex-1">
                <div class="flex items-center justify-between">
                  <span :class="[highlightConfig.titleSize, 'font-bold', getHighlightStyle(item.color).title]" v-html="parseMarkdown(item.title)"></span>
                  <span
                    v-if="item.badge"
                    :class="[
                      'text-xs font-semibold px-2 py-0.5 rounded-full text-white shrink-0 ml-2',
                      item.badgeColor === 'dark' ? 'bg-gray-800' : getHighlightStyle(item.color).icon.replace('text-', 'bg-')
                    ]"
                  >{{ item.badge }}</span>
                </div>
                <span v-if="item.subtitle" :class="[highlightConfig.subtitleSize, 'text-gray-600']" v-html="parseMarkdown(item.subtitle)"></span>
                <div v-if="item.features && item.features.length > 0" class="flex flex-wrap gap-[0.375rem] mt-[0.25rem]">
                  <span
                    v-for="(feature, fIdx) in item.features"
                    :key="fIdx"
                    :class="[
                      highlightConfig.featureSize,
                      'font-medium px-2 py-0.5 rounded-full',
                      getHighlightStyle(item.color).featureBg,
                      getHighlightStyle(item.color).title
                    ]"
                    v-html="parseMarkdown(feature)"
                  ></span>
                </div>
              </div>
            </component>
          </div>

          <!-- Terminal -->
          <div v-else-if="terminal" class="w-full">
            <TerminalBlock :title="terminal.title" :lines="terminal.lines" />
          </div>

          <!-- Custom Slot Content -->
          <div v-else-if="$slots.default" class="w-full">
            <slot />
          </div>

          <!-- Image or Default -->
          <div v-else class="h-[17.5rem] max-h-[31.25rem] w-full flex items-center justify-center">
            <div class="w-full h-full bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 p-[3rem] relative overflow-hidden flex items-center justify-center group">
              <!-- Decorative circles -->
              <div class="absolute -right-[5rem] -top-[5rem] w-[16rem] h-[16rem] bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
              <div class="absolute -left-[5rem] -bottom-[5rem] w-[20rem] h-[20rem] bg-slate-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>

              <!-- Visual Content -->
              <div class="relative z-10 w-full flex flex-col items-center justify-center">
                <!-- imageUrl がある場合は画像を表示 -->
                <img v-if="imageUrl" :src="imageUrl" class="max-w-full max-h-[14rem] object-contain" />
                <!-- なければデフォルトアイコン -->
                <div v-else class="w-[12rem] h-[12rem] rounded-full bg-slate-200 flex items-center justify-center mb-[1.5rem] border-[0.25rem] border-white shadow-lg">
                  <svg class="w-[5rem] h-[5rem] text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
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

    <!-- Popup Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="activeModal"
          class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <div class="relative bg-white rounded-2xl shadow-2xl max-w-[32rem] w-full max-h-[80vh] overflow-hidden flex flex-col">
            <!-- Header -->
            <div class="flex items-center gap-3 p-4 border-b border-gray-100">
              <div :class="['w-10 h-10 rounded-xl flex items-center justify-center', getHighlightStyle(activeModal.color).bg]">
                <span
                  v-if="getIconSvg(activeModal.icon)"
                  v-html="getIconSvg(activeModal.icon)"
                  :class="['w-6 h-6', getHighlightStyle(activeModal.color).icon]"
                ></span>
              </div>
              <h3 class="flex-1 text-xl font-bold text-gray-900">
                {{ activeModal.popup?.title || activeModal.title }}
              </h3>
              <button
                @click="closeModal"
                class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4">
              <!-- Description -->
              <p v-if="activeModal.popup?.description" class="text-gray-700 leading-relaxed">
                {{ activeModal.popup.description }}
              </p>

              <!-- Features List -->
              <ul v-if="activeModal.popup?.features && activeModal.popup.features.length > 0" class="space-y-3">
                <li v-for="(feature, fIdx) in activeModal.popup.features" :key="fIdx" class="flex items-start gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 shrink-0"></div>
                  <div>
                    <span class="font-bold text-gray-900">{{ feature.title }}：</span>
                    <span class="text-gray-700">{{ feature.description }}</span>
                  </div>
                </li>
              </ul>

              <!-- Hint -->
              <div v-if="activeModal.popup?.hint" class="border-l-4 border-blue-400 bg-blue-50 p-3 text-sm text-blue-800 italic">
                ヒント：{{ activeModal.popup.hint }}
              </div>
            </div>

            <!-- Footer with Link Button -->
            <div v-if="activeModal.link" class="p-4 bg-slate-800 flex justify-end">
              <a
                :href="activeModal.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors no-underline"
              >
                <span v-html="getIconSvg('globe')" class="w-4 h-4 inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"></span>
                {{ activeModal.popup?.linkText || 'Visit Project' }}
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
