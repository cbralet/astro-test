import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
export default defineConfig({
  site: 'https://cbralet.github.io',
  base: '/astro-test',
  integrations: [
    react(),
    vue()
  ]
})
