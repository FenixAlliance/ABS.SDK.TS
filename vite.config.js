import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'; // If using TS paths

export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, 'wwwroot/build'),
        terserOptions: {
            mangle: true, // Note: In Vite, keeping class and function names might be different
        },
        rollupOptions: {
            input: './app/index.ts',
            output: {
                // Override the default entry file name:
                entryFileNames: 'bundle.js', // Output file name set to 'bundle.js'
                chunkFileNames: 'bundle-[hash].js', // Name for code-split chunks
                assetFileNames: 'assets/[name]-[hash].[ext]', // Naming pattern for assets
            },
        },
    },
    plugins: [
        tsconfigPaths(), // Only if you're using TS paths and need to resolve them
    ],
    resolve: {
        alias: {
            // Define your aliases here if needed, similar to Webpack's 'resolve.alias'
        },
    },
});