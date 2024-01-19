import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import solid from "vite-plugin-solid";

export default defineConfig({
  server: {
    port: 4200,
  },
  plugins: [
    solid(),
    VitePluginFonts({
      google: { families: ["Source Sans Pro"] },
    }),
  ],
});
