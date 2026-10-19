import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // Prerendering fetches every page from a preview server running in the build process.
  // On "localhost", Node gives IPv6 only 250 ms before trying IPv4, where nothing listens:
  // a slow page render on Netlify then failed the build. A fixed IPv4 address avoids it.
  preview: { host: '127.0.0.1' },
  plugins: [
    devtools({
      // Server and browser logs were relayed back and forth endlessly,
      // flooding the terminal with the same warning.
      consolePiping: { enabled: false },
    }),
    tailwindcss(),
    // Every PNG or JPEG imported by the code (decors, icons, logo) is converted to WebP and
    // never wider than it is displayed: the sources stay untouched in design/ and src/assets.
    // Files in public/ (favicons, social preview) are left as they are.
    imagetools({
      include: '**/*.{png,jpg,jpeg}',
      defaultDirectives: (url) =>
        new URLSearchParams({
          format: 'webp',
          quality: '80',
          // The logo is shown at most 18rem wide; 640 px stays sharp on high-density screens.
          w: url.pathname.includes('sbj-logo') ? '640' : '1280',
        }),
    }),
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
