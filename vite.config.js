import react from "@vitejs/plugin-react";
import sass from "sass";
import { defineConfig } from "vite";

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
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
});
