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
    "permissions": ["cookies"],
    "host_permissions": ["*://x.com/*"],
  },
});
