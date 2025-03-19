import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html

export default defineConfig({
  extensionApi: 'chrome',
  srcDir: 'src',
  outDir: 'dist',
  vite: () => ({
    build: {
      target: 'esnext' //browsers can handle the latest ES features
    }
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
