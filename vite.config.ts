import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools({
      // Server and browser logs were relayed back and forth endlessly,
      // flooding the terminal with the same warning.
      consolePiping: { enabled: false },
    }),
    tailwindcss(),
    tanstackStart({
      // Static hosting (Netlify for the preview, o2switch later): every page is rendered to
      // HTML at build time, following the site's own links from the home page.
      prerender: {
        enabled: true,
        crawlLinks: true,
        // The design system is an internal reference page, not part of the public site.
        filter: ({ path }) => path !== '/design-system',
      },
      // The not-found page, written as the /404.html that static hosts serve for unknown URLs.
      pages: [{ path: '/404', prerender: { enabled: true, outputPath: '/404.html' } }],
      router: {
        // TanStack's generated dynamic import currently does not escape
        // apostrophes in absolute paths. Keep routes bundled until upstream
        // handles projects located in folders such as "Joie d'Être".
        codeSplittingOptions: { defaultBehavior: [] },
      },
    }),
    viteReact(),
  ],
})

export default config
