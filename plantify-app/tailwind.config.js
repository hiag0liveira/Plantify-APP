/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        container: {
            padding: '2rem',
            center: true,
        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                greenFigman: '#6ebe44',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}