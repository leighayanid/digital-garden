module.exports = {
  rge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
}
