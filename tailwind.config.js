/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            rotate: {
                45: '45deg',
                50: '75deg'
            },
            boxShadow: {
                custom: '0px 4px 6px rgba(0, 0, 0, 0.25)'
            },
            scale: {
                120: '1.20'
            }
        },
        keyframes: {
            movedown: {
                '0%': { opacity: '0', transform: 'translateY(-30px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' }
            }
        },
        animation: {
            movedown: 'movedown 1s linear forwards'
        }
    },
    plugins: []
};
