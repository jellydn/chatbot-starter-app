import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    external: ['react'],
    format: ['cjs', 'esm'],
    esbuildOptions(options, context) {
        options.assetNames = 'assets/[name]';
    },
    loader: {
        '.svg': 'file',
    },
});
