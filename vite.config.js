import { defineConfig } from "vite";
import { resolve } from "path";
import { splitVendorChunkPlugin } from "vite";
import vitePluginPug from "./plugins/vite-plugin-pug";
import { visualizer } from 'rollup-plugin-visualizer';

import globule from "globule";

const root = "src";
const distAssetsFolder = "assets"
const htmlFiles = globule.find('src/**/*.pug', {
  ignore: [
    'src/**/_*.pug'
  ]
});

export default defineConfig({
  root,
  base: "/",
  publicDir: resolve(root, "../public"),
  esbuild: {
      drop: ['console', 'debugger'],
  },
  plugins: [
    visualizer({
      open: true,
      template:"sunburst"
    }),
    splitVendorChunkPlugin(),
    vitePluginPug(),
  ],
  resolve: {
    alias: [
      {
        find: "#",
        replacement: "/assets/scripts",
      }
    ],
  },
  optimizeDeps: {
    include: ['**/*.pug'],
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: resolve(root, "../htdocs"),
    emptyOutDir: true,
    minify: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: htmlFiles,
      output: {
        chunkFileNames: `${distAssetsFolder}/js/vendor/[name]-[hash].js`,
        entryFileNames: `${distAssetsFolder}/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.css$/.test(assetInfo.name)) {
            return `${distAssetsFolder}/css/[name]-[hash].[ext]`;
          }
          return `${distAssetsFolder}/images/[name]-[hash].[ext]`;
        }
      },
    },
  },
  server: {
    cors: true,
    strictPort: true,
    port: 5133,
    host: true,
  },
});