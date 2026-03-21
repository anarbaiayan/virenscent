/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        panel: 'hsl(var(--panel) / <alpha-value>)',
        'panel-strong': 'hsl(var(--panel-strong) / <alpha-value>)',
        line: 'hsl(var(--line) / <alpha-value>)',
        brand: 'hsl(var(--brand) / <alpha-value>)',
        'brand-deep': 'hsl(var(--brand-deep) / <alpha-value>)',
        'brand-soft': 'hsl(var(--brand-soft) / <alpha-value>)',
        glow: 'hsl(var(--glow) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 22px 60px -30px rgba(23, 77, 50, 0.28)',
        glow: '0 18px 48px -18px rgba(29, 191, 115, 0.35)'
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(circle at 18% 18%, rgba(127, 232, 164, 0.24), transparent 32%), radial-gradient(circle at 86% 14%, rgba(18, 130, 82, 0.22), transparent 26%), radial-gradient(circle at 82% 82%, rgba(98, 221, 148, 0.18), transparent 28%)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
