/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xxs': '391px',
            'xs': '431px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    darkMode: ['selector', '[data-theme="dark"]'],
    daisyui: {
        // themes: false,
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    "primary": "#0ca5b0",
                    "secondary": "#2fb8ac",
                },
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    'primary': "#0ca5b0",
                    "secondary": "#2fb8ac",
                }
            }
        ],
    },
    plugins: [
        require("daisyui")
    ],
}