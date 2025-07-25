import {resolve} from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080,
    open: '/src/index.html',
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
}