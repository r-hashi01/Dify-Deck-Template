/**
 * Simple inline Markdown parser for slide content
 * Supports: **bold**, *italic*, `code`, ~~strikethrough~~, [link](url)
 */

export interface MarkdownOptions {
  boldClass?: string
  italicClass?: string
  codeClass?: string
  strikeClass?: string
  linkClass?: string
}

const defaultOptions: MarkdownOptions = {
  boldClass: 'font-bold text-[#0033FF]',
  italicClass: 'italic',
  codeClass: 'font-mono bg-gray-100 text-[#0033FF] px-1.5 py-0.5 rounded text-[0.9em]',
  strikeClass: 'line-through text-gray-400',
  linkClass: 'text-[#0033FF] underline hover:text-blue-700',
}

/**
 * Parse inline Markdown to HTML
 * Order matters: process more specific patterns first
 */
export function parseMarkdown(text: string, options: MarkdownOptions = {}): string {
  const opts = { ...defaultOptions, ...options }

  let result = text

  // Escape HTML entities first (but preserve intentional HTML)
  // Skip this if the text contains HTML tags
  if (!/<[a-z][\s\S]*>/i.test(result)) {
    result = result
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  // Links: [text](url) - must be processed before other patterns
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    `<a href="$2" target="_blank" rel="noopener" class="${opts.linkClass}">$1</a>`
  )

  // Code: `code` - process before bold/italic to avoid conflicts
  result = result.replace(
    /`([^`]+)`/g,
    `<code class="${opts.codeClass}">$1</code>`
  )

  // Bold: **text** or __text__
  result = result.replace(
    /\*\*([^*]+)\*\*/g,
    `<strong class="${opts.boldClass}">$1</strong>`
  )
  result = result.replace(
    /__([^_]+)__/g,
    `<strong class="${opts.boldClass}">$1</strong>`
  )

  // Italic: *text* or _text_ (but not inside words for _)
  result = result.replace(
    /\*([^*]+)\*/g,
    `<em class="${opts.italicClass}">$1</em>`
  )
  result = result.replace(
    /(?<![a-zA-Z])_([^_]+)_(?![a-zA-Z])/g,
    `<em class="${opts.italicClass}">$1</em>`
  )

  // Strikethrough: ~~text~~
  result = result.replace(
    /~~([^~]+)~~/g,
    `<span class="${opts.strikeClass}">$1</span>`
  )

  return result
}

/**
 * Parse Markdown with custom bold color (for different contexts)
 */
export function parseMarkdownWithColor(text: string, boldColor: string = '#0033FF'): string {
  return parseMarkdown(text, {
    boldClass: `font-bold text-[${boldColor}]`,
  })
}

/**
 * Simple bold-only parser (backwards compatible)
 */
export function parseBold(text: string, className: string = 'text-[#0033FF] font-extrabold'): string {
  return text.replace(/\*\*([^*]+)\*\*/g, `<strong class="${className}">$1</strong>`)
}
