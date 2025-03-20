import { defineConfig } from 'wxt';
import path, { resolve } from "path";

// See https://wxt.dev/api/config.html

/* resolve root path  */
const root = resolve(__dirname, "src");

export default defineConfig({
  extensionApi: 'chrome',
  srcDir: 'src',
  outDir: 'dist',
  vite: () => ({
    build: {
      // rollupOptions: {
      //   input: {
      //     /* custom entries for dist directory */
      //     'injectScript/script': resolve(root,'entrypoints/popup/main.ts'),
      //   },
      // },
      target: 'esnext' //browsers can handle the latest ES features
    },
    resolve: {
      /* create alias for src path */
      alias: {
        "@src": root,  
      },
    },

  }),
  manifest: {
    "permissions": ["cookies", "webRequest", "storage", "tabs", "activeTab", "scripting"],
    "host_permissions": ["*://x.com/*"],
    "web_accessible_resources": [
      {
        "matches": ["*://x.com/*"],
        "resources": ["content.ts"]
      }
    ],
  },
});
