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
