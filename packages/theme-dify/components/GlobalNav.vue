<script setup lang="ts">
import { useNav, useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { $slidev } = useSlideContext()
const { currentSlideNo, total, go, next, prev } = useNav()

const deckTitle = computed(() => $slidev?.configs?.title || 'Dify Deck')

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

      <!-- Fullscreen -->
      <button
        @click="toggleFullscreen"
        class="nav-btn"
        title="Toggle fullscreen"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
  </div>
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
  background: #0B33F3;
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
  border-color: #0B33F3;
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
</style>
