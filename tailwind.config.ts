import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    // Primárias
                    navy:       '#0D1B2E',
                    green:      '#2D6E45',
                    // Suporte
                    cream:      '#F8F7F4',
                    'gray-100': '#F2F2F0',
                    'gray-200': '#E4E4E0',
                    'gray-400': '#AAAA9E',
                    'gray-600': '#6B6B60',
                    mint:       '#6DBF8A',
                    'green-lt': '#3D8A58',
                },
            },
            fontFamily: {
                display: ['Montserrat', 'system-ui', 'sans-serif'],
                sans:    ['Inter', 'system-ui', 'sans-serif'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
            },
        },
    },
    plugins: [],
}
export default config