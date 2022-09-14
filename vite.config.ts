import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path, { resolve } from "path";
// import settings from "/@/config/component_Setting/sys_setting";
// https://vitejs.dev/config/
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base:'./',
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: resolve(__dirname, 'src'),
      },
    ]
  },
});
