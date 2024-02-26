// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/zhangkaiwai-macminim2pro/Desktop/GithubRepoClones.nosync/mine/DreamBoost/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zhangkaiwai-macminim2pro/Desktop/GithubRepoClones.nosync/mine/DreamBoost/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslintPlugin from "file:///Users/zhangkaiwai-macminim2pro/Desktop/GithubRepoClones.nosync/mine/DreamBoost/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/zhangkaiwai-macminim2pro/Desktop/GithubRepoClones.nosync/mine/DreamBoost/vite.config.js";
var vite_config_default = defineConfig({
  base: "/DreamBoost/",
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemhhbmdrYWl3YWktbWFjbWluaW0ycHJvL0Rlc2t0b3AvR2l0aHViUmVwb0Nsb25lcy5ub3N5bmMvbWluZS9EcmVhbUJvb3N0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvemhhbmdrYWl3YWktbWFjbWluaW0ycHJvL0Rlc2t0b3AvR2l0aHViUmVwb0Nsb25lcy5ub3N5bmMvbWluZS9EcmVhbUJvb3N0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy96aGFuZ2thaXdhaS1tYWNtaW5pbTJwcm8vRGVza3RvcC9HaXRodWJSZXBvQ2xvbmVzLm5vc3luYy9taW5lL0RyZWFtQm9vc3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy9EcmVhbUJvb3N0LycsXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogWydzcmMvKiovKi5qcycsICdzcmMvKiovKi52dWUnLCAnc3JjLyouanMnLCAnc3JjLyoudnVlJ10sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWixTQUFTLGVBQWUsV0FBVztBQUVsYyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxrQkFBa0I7QUFKNk8sSUFBTSwyQ0FBMkM7QUFPdlQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLGVBQWUsZ0JBQWdCLFlBQVksV0FBVztBQUFBLElBQ2xFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==