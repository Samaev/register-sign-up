// https://nuxt.com/docs/api/configuration/nuxt-config
import { configDefaults } from 'vitest/config'
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: {
    strict: true
  },

  app: {
    head: {
      title: "Nordhealth Sign-Up",
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.includes("provet-"),
        },
      },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./test/setup.ts'],
      include: ['app/**/*.test.{ts,js}'],
      exclude: [...configDefaults.exclude],
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
      },
    },
  },

  modules: ["@nuxt/image"],
})