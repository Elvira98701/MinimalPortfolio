import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      implementation: sass,
      scss: {
        additionalData: ` 
          @use "@styles/mixins" as mixin;
          @use "@styles/mixins" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
    },
  },
});
