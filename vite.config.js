import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: './',
    server: {
      proxy: {
        '^/the-cobbs/graphql': {
          target: mode === 'production' ? process.env.BASE_URL : process.env.VITE_GRAPHQL_URL,
          changeOrigin: true,
        }
      },
    },
    plugins: [
      vue(),
      inject({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, './src')
      }
    }
  })
}
