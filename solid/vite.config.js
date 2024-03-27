import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
    server: {
        port: 4200,
    },
    plugins: [
        solid(),
        Unfonts({
            google: { families: ['Source Sans Pro'] },
        }),
    ],
});
