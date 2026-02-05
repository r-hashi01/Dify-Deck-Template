<script setup lang="ts">
import { computed, ref } from 'vue'
import SlideFooter from '../components/SlideFooter.vue'
import SlideLogo from '../components/SlideLogo.vue'
import BulletList from '../components/BulletList.vue'
import TerminalBlock from '../components/TerminalBlock.vue'
import { getIconSvg } from '../utils/icons'
import { parseMarkdown } from '../utils/markdown'

// ネスト可能な箇条書き項目
interface BulletItem {
  text: string
  children?: (string | BulletItem)[]
}
type BulletEntry = string | BulletItem

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

// ポップアップの機能項目
interface PopupFeature {
  title: string
  description: string
}

// ハイライトカードの型
interface HighlightItem {
  icon: string
  title: string
  subtitle?: string
  features?: string[]
  color?: string
  badge?: string
  badgeColor?: string
  link?: string
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
  items?: BulletEntry[]
  description?: string
  imageUrl?: string
  imageAlt?: string
  imageClass?: string
  highlights?: HighlightItem[]
  terminal?: TerminalConfig
  textSize?: 'small' | 'medium' | 'large'
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'Split Layout')
const subtitle = computed(() => props.subtitle || '')
const items = computed(() => props.items || [])
const description = computed(() => props.description || '')
const imageUrl = computed(() => props.imageUrl)
const imageAlt = computed(() => props.imageAlt || '')
const imageClass = computed(() => props.imageClass || '')
const highlights = computed(() => props.highlights || [])
const terminal = computed(() => props.terminal)

// Text size presets (bullet uses BulletList size: xs, sm, md, lg, xl)
const textSizePresets = {
  large: { bullet: 'md' as const, desc: 'text-[1.1rem]', space: 'space-y-[1rem]' },
  medium: { bullet: 'sm' as const, desc: 'text-[1rem]', space: 'space-y-[0.75rem]' },
  small: { bullet: 'xs' as const, desc: 'text-[0.85rem]', space: 'space-y-[0.5rem]' },
}

// Auto-detect size based on item count
const effectiveSize = computed(() => {
  if (props.textSize) return props.textSize
  const count = items.value.length
  if (count <= 3) return 'large'
  if (count <= 5) return 'medium'
  return 'small'
})

const sizeConfig = computed(() => textSizePresets[effectiveSize.value])

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
        <h1 class="text-[3rem] font-extrabold text-[#0033FF] tracking-tight leading-tight" v-html="parseMarkdown(slideTitle)">
        </h1>
        <h2 v-if="subtitle" class="text-[1.5rem] text-gray-600 mb-[1rem] border-l-[0.375rem] border-[#0033FF] pl-[1rem]" v-html="parseMarkdown(subtitle)">
        </h2>
        <div class="w-full h-px bg-gray-200"></div>
      </div>

      <!-- Content Area: Split Layout -->
      <div class="flex flex-row gap-[2.5rem] flex-1 items-center justify-center min-h-0 mt-[1rem]">
        <!-- Left: Bullet List + Description -->
        <div class="w-1/2 flex flex-col justify-center min-h-0 overflow-auto h-full">
          <div :class="sizeConfig.space">
            <BulletList v-if="items.length > 0" :items="items" :size="sizeConfig.bullet" />
            <div v-if="description" :class="[sizeConfig.desc, 'text-gray-900 leading-relaxed font-extrabold']" v-html="parseMarkdown(description)">
            </div>
          </div>
        </div>

        <!-- Right: Visual Content -->
        <div class="w-1/2 h-full min-h-0 flex items-center justify-center">
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

          <!-- Image -->
          <div v-else-if="imageUrl" class="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-[2rem] relative overflow-hidden rounded-xl">
            <img
              :src="imageUrl"
              :alt="imageAlt"
              :class="['max-w-full max-h-full object-contain', imageClass]"
            />
          </div>

          <!-- Slot Content -->
          <div v-else-if="$slots.default" class="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-[2rem] relative overflow-hidden rounded-xl">
            <slot />
          </div>

          <!-- Default Placeholder -->
          <div v-else class="w-full h-full bg-white border border-gray-200 flex items-center justify-center p-[2rem] relative overflow-hidden rounded-xl">
            <div class="text-center">
              <div class="w-[4rem] h-[4rem] mx-auto mb-[1rem] text-[#0033FF]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 class="text-[1.25rem] font-bold text-slate-700">Visual Area</h3>
              <p class="text-slate-500">Any content here</p>
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
