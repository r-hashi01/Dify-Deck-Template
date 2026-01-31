import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'dify-blue': 'bg-[#1C64F2]',
    'text-dify-blue': 'text-[#1C64F2]',
  },
  theme: {
    colors: {
      'dify-blue': '#0B33F3',
    },
  },
  safelist: [
    // Ensure these classes are always included
    'bg-white',
    'bg-gray-50',
    'bg-gray-100',
    'bg-black',
    'text-black',
    'text-white',
    'text-gray-400',
    'text-gray-500',
    'text-gray-600',
    'border-black',
    'border-gray-100',
    'border-gray-200',
    'h-full',
    'w-full',
    'flex',
    'flex-col',
    'items-start',
    'items-center',
    'items-end',
    'justify-center',
    'justify-between',
    'relative',
    'absolute',
    'overflow-hidden',
    'z-10',
  ],
})
