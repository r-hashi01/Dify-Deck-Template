<script setup lang="ts">
interface TerminalLine {
  type: 'command' | 'output'
  text: string
}

const props = defineProps<{
  title?: string
  lines?: TerminalLine[]
}>()

const title = props.title || 'Terminal'
const lines = props.lines || []
</script>

<template>
  <div class="rounded-lg overflow-hidden shadow-2xl font-mono text-sm">
    <!-- Title Bar -->
    <div class="bg-gray-700 px-4 py-2 flex items-center gap-2">
      <!-- Traffic Lights -->
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <!-- Title -->
      <div class="flex-1 text-center text-gray-300 text-xs">
        {{ title }}
      </div>
      <!-- Spacer for symmetry -->
      <div class="w-[3.75rem]"></div>
    </div>

    <!-- Terminal Body -->
    <div class="bg-gray-900 p-4 space-y-1">
      <div v-for="(line, idx) in lines" :key="idx">
        <!-- Command Line -->
        <div v-if="line.type === 'command'" class="text-green-400">
          <span class="text-gray-500">$ </span>{{ line.text }}
        </div>
        <!-- Output Line -->
        <div v-else class="text-gray-300 whitespace-pre-wrap">
          {{ line.text }}
        </div>
      </div>
    </div>
  </div>
</template>
