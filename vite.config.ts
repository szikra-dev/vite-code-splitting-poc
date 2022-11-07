import { dependencies } from './package.json'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'

const reactDeps = Object.keys(dependencies).filter(
  (key) => key === 'react' || key.startsWith('react-'),
)

const manualChunks = {
  vendor: reactDeps,
  ...Object.keys(dependencies).reduce((chunks, name) => {
    if (!reactDeps.includes(name)) {
      chunks[name] = [name]
    }
    return chunks
  }, {}),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
