<script setup lang="ts">
import { useNav, useSlideContext } from '@slidev/client'
import { computed, ref } from 'vue'

const { $slidev } = useSlideContext()
const { currentSlideNo, total, go, next, prev } = useNav()

const deckTitle = computed(() => $slidev?.configs?.title || 'Dify Deck')
const showShortcuts = ref(false)

const goToSlide = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    const target = parseInt((e.target as HTMLInputElement).value)
    if (!isNaN(target) && target >= 1 && target <= total.value) {
      go(target)
      ;(e.target as HTMLInputElement).blur()
    }
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const goHome = () => {
  const isDev = (import.meta as any).env?.DEV
  if (isDev) {
    // Development: go to dev server index
    window.location.href = 'http://localhost:3000'
  } else {
    // Production: go to site root
    window.location.href = window.location.origin
  }
}

const downloadPdf = () => {
  // Download pre-generated PDF
  const currentUrl = window.location.href
  const presenterUrl = currentUrl.replace(/\/\d+$/, '').replace(/\/$/, '') + '/export'
  window.open(presenterUrl, '_blank')
}

const openPresenter = () => {
  const currentUrl = window.location.href
  const presenterUrl = currentUrl.replace(/\/\d+$/, '').replace(/\/$/, '') + '/presenter'
  window.open(presenterUrl, '_blank')
}

const toggleShortcuts = () => {
  showShortcuts.value = !showShortcuts.value
}

const shortcuts = [
  { key: '← / →', desc: '前/次のスライド' },
  { key: 'Space', desc: '次のスライド' },
  { key: 'g', desc: 'スライド番号指定' },
  { key: 'o', desc: 'スライド一覧' },
  { key: 'p', desc: 'プレゼンターモード' },
  { key: 'd', desc: 'ダークモード切替' },
  { key: 'f', desc: 'フルスクリーン' },
  { key: 'Esc', desc: '終了/閉じる' },
]
</script>

<template>
  <div class="nav-trigger"></div>
  <div class="global-nav">
    <!-- Left: Logo & Title -->
    <div class="nav-left">
      <div class="nav-logo">D</div>
      <span class="nav-title">{{ deckTitle }}</span>
    </div>

    <!-- Right: Controls -->
    <div class="nav-right">
      <!-- Prev -->
      <button
        @click="prev"
        :disabled="currentSlideNo <= 1"
        class="nav-btn"
        title="Previous slide"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Page Input -->
      <div class="nav-page">
        <input
          type="text"
          :value="currentSlideNo"
          @keydown="goToSlide"
          @focus="($event.target as HTMLInputElement).select()"
          class="nav-page-input"
        />
        <span class="nav-page-total">/ {{ total }}</span>
      </div>

      <!-- Next -->
      <button
        @click="next"
        :disabled="currentSlideNo >= total"
        class="nav-btn"
        title="Next slide"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="nav-divider"></div>

      <!-- Presenter Mode -->
      <button
        @click="openPresenter"
        class="nav-btn"
        title="Presenter mode (P)"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      <!-- Fullscreen -->
      <button
        @click="toggleFullscreen"
        class="nav-btn"
        title="Fullscreen (F)"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>

      <div class="nav-divider"></div>

      <!-- Keyboard Shortcuts -->
      <button
        @click="toggleShortcuts"
        class="nav-btn"
        title="Keyboard shortcuts"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>

      <!-- Download PDF -->
      <button
        @click="downloadPdf"
        class="nav-btn"
        title="Download PDF"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3" />
        </svg>
      </button>

      <!-- Home -->
      <button
        @click="goHome"
        class="nav-btn nav-btn-home"
        title="Back to Home"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Shortcuts Modal -->
  <Teleport to="body">
    <div v-if="showShortcuts" class="shortcuts-overlay" @click="toggleShortcuts">
      <div class="shortcuts-modal" @click.stop>
        <div class="shortcuts-header">
          <h2>Keyboard Shortcuts</h2>
          <button @click="toggleShortcuts" class="shortcuts-close">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="shortcuts-list">
          <div v-for="s in shortcuts" :key="s.key" class="shortcut-item">
            <kbd class="shortcut-key">{{ s.key }}</kbd>
            <span class="shortcut-desc">{{ s.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.nav-trigger {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 999;
}

.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.nav-trigger:hover + .global-nav,
.global-nav:hover {
  opacity: 1;
  pointer-events: auto;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-logo {
  width: 1.75rem;
  height: 1.75rem;
  background: #0033FF;
  color: white;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-title {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.025em;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-btn {
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #9CA3AF;
  cursor: pointer;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background: rgba(55, 65, 81, 0.5);
  color: white;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-page {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #9CA3AF;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
}

.nav-page-input {
  width: 2.5rem;
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid #374151;
  border-radius: 0.25rem;
  color: white;
  text-align: center;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  padding: 0.25rem;
  transition: all 0.2s ease;
}

.nav-page-input:focus {
  outline: none;
  border-color: #0033FF;
  box-shadow: 0 0 0 2px rgba(11, 51, 243, 0.2);
}

.nav-page-total {
  color: #6B7280;
}

.nav-divider {
  width: 1px;
  height: 1.5rem;
  background: #374151;
  margin: 0 0.5rem;
}

.nav-btn-home:hover:not(:disabled) {
  background: rgba(0, 51, 255, 0.2);
  color: #60a5fa;
}

/* Shortcuts Modal */
.shortcuts-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.shortcuts-modal {
  background: #1f2937;
  border-radius: 1rem;
  padding: 1.5rem;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid #374151;
}

.shortcuts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #374151;
}

.shortcuts-header h2 {
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.shortcuts-close {
  background: transparent;
  border: none;
  color: #9CA3AF;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.shortcuts-close:hover {
  background: rgba(55, 65, 81, 0.5);
  color: white;
}

.shortcuts-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.shortcut-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.shortcut-key {
  background: #374151;
  color: #e5e7eb;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  font-family: ui-monospace, monospace;
  font-size: 0.8rem;
  min-width: 5rem;
  text-align: center;
  border: 1px solid #4b5563;
}

.shortcut-desc {
  color: #9CA3AF;
  font-size: 0.875rem;
}
</style>
