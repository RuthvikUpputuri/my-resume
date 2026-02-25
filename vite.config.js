import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'resume/*',
                    dest: 'resume'
                }
            ]
        }),
        compression()
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                // Keep asset file names clean
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js'
            }
        }
    }
});
