import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs/promises'

export default defineConfig({
    resolve: {
        alias: {
            src: resolve(__dirname, 'src'),
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        // loader: "tsx",
        // include: /src\/.*\.[tj]sx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /src\\.*\.js$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        )
                    },
                },
            ],
        },
    },
    plugins: [react()],
})
