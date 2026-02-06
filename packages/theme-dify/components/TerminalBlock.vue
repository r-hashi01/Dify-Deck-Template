<script setup lang="ts">
import { computed } from 'vue'

// Support multiple input formats for flexibility
type TerminalLineInput = string | { type?: 'command' | 'output' | 'code', text: string }

interface NormalizedLine {
  type: 'command' | 'output' | 'code'
  text: string
}

const props = defineProps<{
  title?: string
  lines?: TerminalLineInput[]
  linesJson?: string  // JSON string alternative to avoid YAML parsing issues
  textSize?: 'xxs' | 'xs' | 'small' | 'medium' | 'large'
}>()

const title = props.title || 'Terminal'

// Text size classes
const textSizeClass = computed(() => {
  switch (props.textSize) {
    case 'xxs': return 'text-[0.5rem]'
    case 'xs': return 'text-[0.65rem]'
    case 'small': return 'text-[0.75rem]'
    case 'large': return 'text-[0.9rem]'
    default: return 'text-[0.8rem]'
  }
})

// Compact mode for xs size - reduces padding and spacing
const isCompact = computed(() => props.textSize === 'xxs' || props.textSize === 'xs')
const titleBarClass = computed(() => isCompact.value ? 'px-2 py-1' : 'px-4 py-2')
const bodyClass = computed(() => isCompact.value ? 'p-2 space-y-0.5' : 'p-4 space-y-1')
const trafficLightSize = computed(() => isCompact.value ? 'w-2 h-2' : 'w-3 h-3')

// Parse linesJson if provided, otherwise use lines array
let rawLines: TerminalLineInput[] = []
if (props.linesJson) {
  try {
    rawLines = JSON.parse(props.linesJson)
  } catch (e) {
    console.error('Failed to parse linesJson:', e)
  }
} else {
  rawLines = props.lines || []
}

// Normalize lines to always have type and text
const lines: NormalizedLine[] = rawLines.map(line => {
  if (typeof line === 'string') {
    // String starting with $ is a command, otherwise output
    const isCommand = line.startsWith('$ ')
    return {
      type: isCommand ? 'command' : 'output',
      text: isCommand ? line.slice(2) : line
    }
  }
  return {
    type: line.type || 'output',
    text: line.text
  }
})
</script>

<template>
  <div :class="['rounded-lg overflow-hidden shadow-2xl font-mono', textSizeClass]">
    <!-- Title Bar -->
    <div :class="['bg-gray-700 flex items-center gap-2', titleBarClass]">
      <!-- Traffic Lights -->
      <div class="flex gap-1">
        <div :class="['rounded-full bg-red-500', trafficLightSize]"></div>
        <div :class="['rounded-full bg-yellow-500', trafficLightSize]"></div>
        <div :class="['rounded-full bg-green-500', trafficLightSize]"></div>
      </div>
      <!-- Title -->
      <div :class="['flex-1 text-center text-gray-300', isCompact ? 'text-[0.6rem]' : 'text-xs']">
        {{ title }}
      </div>
      <!-- Spacer for symmetry -->
      <div :class="isCompact ? 'w-[2.5rem]' : 'w-[3.75rem]'"></div>
    </div>

    <!-- Terminal Body -->
    <div :class="['bg-gray-900', bodyClass]">
      <div v-for="(line, idx) in lines" :key="idx">
        <!-- Command Line -->
        <div v-if="line.type === 'command'" class="text-green-400">
          <span class="text-gray-500">$ </span>{{ line.text }}
        </div>
        <!-- Code Line -->
        <div v-else-if="line.type === 'code'" class="text-green-400 whitespace-pre-wrap">
          {{ line.text }}
        </div>
        <!-- Output Line -->
        <div v-else class="text-gray-300 whitespace-pre-wrap">
          {{ line.text }}
        </div>
      </div>
    </div>
  </div>
</template>
