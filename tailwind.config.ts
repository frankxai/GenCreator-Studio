import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Token names match design.md from FrankX (creator-agnostic defaults).
        // Replace these with your own brand tokens.
        void: '#0a0a0b',
        space: '#111113',
        elevated: '#1a1a1f',
        subtle: '#252530',
        border: '#1E1E1E',
        'border-strong': '#2F2F2F',
        ink: '#FFFFFF',
        'ink-muted': '#A9A9AA',
        'ink-subtle': '#787878',
        'ink-faint': '#535354',
        'tech-primary': '#10b981',
        'tech-secondary': '#06b6d4',
        'soul-primary': '#f59e0b',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
