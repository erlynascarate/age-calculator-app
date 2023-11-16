import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const description = `Age Culculate App

Age icons created by Freepik - Flaticon
https://www.flaticon.com/free-icons/age`

// https://vitejs.dev/config/
export default defineConfig({
    base: '/age-calculator-app/',
    plugins: [
        react(),
        VitePWA({
            injectRegister: 'inline',
            includeAssets: [
                'favicon.ico',
                'favicon-32x32.png',
                'favicon-16x16.png',
                'apple-touch-icon.png',
                'screenshot.png',
            ],
            manifest: {
                name: 'Age Calculator',
                short_name: 'Calculator',
                description,
                theme_color: '#ffffff',
                background_color: '#ffffff',
                orientation: 'portrait',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-753x753.png',
                        sizes: '753x753',
                        type: 'image/png',
                    },
                    {
                        src: 'maskable_icon_x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {
                        src: 'maskable_icon.png',
                        sizes: '731x731',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
                screenshots: [
                    {
                        src: 'screenshot.png',
                        sizes: '750x1334',
                        type: 'image/png',
                        form_factor: 'narrow',
                        label: 'Age calculator being used',
                    },
                    {
                        src: 'screenshot2.png',
                        sizes: '750x1334',
                        type: 'image/png',
                        form_factor: 'narrow',
                        label: 'Age calculator being used (in dark mode)',
                    },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'gstatic-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ],
            },
        }),
    ],
})
