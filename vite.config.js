import { defineConfig } from 'vite';
export default defineConfig(async ({ command }) => {
    return {
        base: "./",
        plugins: [
        ],
        server: {
            strictPort: true,
            port: 3000,
            hmr: false,
        },
    }
});