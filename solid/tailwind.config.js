import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro'],
        },
        extend: {
            colors: {
                adfinis: {
                    blue: '#2e4b98',
                    darkblue: '#1c2e5d',
                    green: '#2e987b',
                    grey: '#8b8b8c',
                    black: '#0f0f0f',
                    white: '#f8f7f7',
                },
                black: '#0f0f0f',
                white: '#f8f7f7',
            },
        },
    },
    plugins: [typography()],
};
