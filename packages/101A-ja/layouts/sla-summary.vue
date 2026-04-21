<script setup lang="ts">
import { computed } from 'vue'
import SlideFooter from '../../theme-dify/components/SlideFooter.vue'
import SlideLogo from '../../theme-dify/components/SlideLogo.vue'
import { parseMarkdown } from '../../theme-dify/utils/markdown'

interface ResponseRow {
  priority: string
  level?: string
  time: string
}

const props = defineProps<{
  slideTitle?: string
  subtitle?: string
  applicability?: string[]
  covered?: string[]
  excluded?: string[]
  responseRows?: ResponseRow[]
  warningTitle?: string
  warningText?: string
  deckName?: string
  copyright?: string
  authorName?: string
  logoVariant?: 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue'
}>()

const slideTitle = computed(() => props.slideTitle || 'SLA Summary')
const subtitle = computed(() => props.subtitle || '')
const applicability = computed(() => props.applicability || [])
const covered = computed(() => props.covered || [])
const excluded = computed(() => props.excluded || [])
const responseRows = computed(() => props.responseRows || [])
const warningTitle = computed(() => props.warningTitle || '重要')
const warningText = computed(() => props.warningText || '')
</script>

<template>
  <div class="flex flex-col h-full px-[3rem] pt-[1rem] pb-[3.25rem] relative overflow-hidden bg-white">
    <div class="absolute inset-0 z-0 pointer-events-none opacity-6">
      <div class="absolute inset-0" style="background-image: radial-gradient(#9CA3AF 1px, transparent 1px); background-size: 2.5rem 2.5rem;"></div>
    </div>

    <SlideLogo :variant="logoVariant || 'default'" />

    <div class="relative z-10 flex flex-col h-full">
      <div class="flex flex-col items-start w-full">
        <h1 class="text-[2.2rem] font-extrabold text-[#0033FF] tracking-tight leading-tight" v-html="parseMarkdown(slideTitle)"></h1>
        <h2 v-if="subtitle" class="text-[1rem] text-gray-500 mb-[0.4rem] border-l-[0.2rem] border-[#0033FF] pl-[0.6rem]" v-html="parseMarkdown(subtitle)"></h2>
        <div class="w-full h-px mt-[0.35rem] bg-gray-200"></div>
      </div>

      <div class="flex-1 min-h-0 mt-[0.5rem] flex flex-col gap-[0.55rem]">
        <div class="grid grid-cols-[0.9fr_2.1fr] gap-[0.55rem]">
          <div class="rounded-xl border border-gray-200 bg-white/90 px-[0.875rem] py-[0.7rem]">
            <div class="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-gray-400 mb-[0.25rem]">Applicability</div>
            <div class="text-[0.95rem] font-bold text-[#0033FF] mb-[0.35rem]">適用対象</div>
            <div class="space-y-[0.2rem]">
              <div
                v-for="(item, idx) in applicability"
                :key="idx"
                class="text-[0.82rem] text-gray-700 leading-[1.3]"
                v-html="parseMarkdown(item)"
              ></div>
            </div>
          </div>

          <div class="rounded-xl border border-gray-200 bg-white/90 px-[0.875rem] py-[0.7rem]">
            <div class="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-gray-400 mb-[0.25rem]">Scope</div>
            <div class="grid grid-cols-2 gap-[0.75rem]">
              <div>
                <div class="text-[0.95rem] font-bold text-[#0033FF] mb-[0.35rem]">対象範囲</div>
                <div class="space-y-[0.2rem]">
                  <div
                    v-for="(item, idx) in covered"
                    :key="idx"
                    class="text-[0.8rem] text-gray-700 leading-[1.28]"
                    v-html="parseMarkdown(item)"
                  ></div>
                </div>
              </div>

              <div class="border-l border-gray-200 pl-[0.75rem]">
                <div class="text-[0.95rem] font-bold text-[#0033FF] mb-[0.35rem]">対象外</div>
                <div class="space-y-[0.2rem]">
                  <div
                    v-for="(item, idx) in excluded"
                    :key="idx"
                    class="text-[0.8rem] text-gray-700 leading-[1.28]"
                    v-html="parseMarkdown(item)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white/90 px-[0.875rem] py-[0.7rem]">
          <div class="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-gray-400 mb-[0.25rem]">Response Time</div>
          <div class="text-[0.95rem] font-bold text-[#0033FF] mb-[0.35rem]">優先度と初回応答時間</div>
          <div class="grid grid-cols-4 gap-[0.55rem]">
            <div
              v-for="(row, idx) in responseRows"
              :key="idx"
              class="rounded-lg border border-gray-200 bg-gray-50/80 px-[0.75rem] py-[0.55rem]"
            >
              <div class="flex items-baseline gap-[0.25rem] mb-[0.15rem]">
                <span class="text-[0.9rem] font-extrabold text-[#0033FF]">{{ row.priority }}</span>
                <span v-if="row.level" class="text-[0.7rem] text-gray-500">{{ row.level }}</span>
              </div>
              <div class="text-[0.88rem] font-bold text-slate-900">{{ row.time }}</div>
            </div>
          </div>
        </div>

        <div class="rounded-xl border border-amber-200 bg-amber-50/85 px-[0.875rem] py-[0.6rem]">
          <div class="text-[0.92rem] font-bold text-slate-900 mb-[0.1rem]">{{ warningTitle }}</div>
          <div class="text-[0.8rem] text-slate-700 leading-[1.28]" v-html="parseMarkdown(warningText)"></div>
        </div>
      </div>
    </div>

    <SlideFooter
      :deck-name="deckName"
      :copyright="copyright"
      :author-name="authorName"
    />
  </div>
</template>
