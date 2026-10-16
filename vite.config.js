import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// LIBRARY mode. The package main (wwwroot/build/bundle.js) must EXPORT every client namespace that
// app/index.ts re-exports. The previous application-mode build tree-shook every export away and shipped a
// ~400-byte bundle containing only createClient(createConfig()) calls (found 2026-10-16). Consumers still
// deep-import the TypeScript sources (clients/<service>), which are published alongside the bundle.
export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, 'wwwroot/build'),
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'app/index.ts'),
            formats: ['es'],
            fileName: () => 'bundle.js',
        },
        rollupOptions: {
            external: ['@hey-api/client-fetch'],
        },
    },
    plugins: [
        tsconfigPaths(),
    ],
});
