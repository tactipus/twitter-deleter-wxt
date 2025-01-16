import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  srcDir: 'src',
  outDir: 'dist',
  // entrypointsDir: "entries", // default: "entrypoints"
  // modulesDir: "wxt-modules", // default: "modules"
  // publicDir: "static", 
});
