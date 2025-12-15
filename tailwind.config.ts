import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                nardo: {
                    light: '#6B6B6B',
                    DEFAULT: '#4A4A4A',
                    dark: '#2E2E2E',
                },
                matte: '#0A0A0A',
                gold: {
                    light: '#D4AF37',
                    DEFAULT: '#B8941F',
                },
                dark: {
                    100: '#1A1A1A',
                    200: '#151515',
                    300: '#0F0F0F',
                },
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                cormorant: ['Cormorant Garamond', 'serif'],
            },
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
                marquee: 'marquee var(--duration) linear infinite',
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' }
                }
            },
            maxWidth: {
                container: "1280px",
            },
            letterSpacing: {
                luxury: '0.5rem',
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #2E2E2E 50%, #0A0A0A 100%)',
                'gradient-nardo': 'linear-gradient(135deg, #2E2E2E 0%, #4A4A4A 50%, #2E2E2E 100%)',
            },
        },
    },
    plugins: [],
} satisfies Config;
