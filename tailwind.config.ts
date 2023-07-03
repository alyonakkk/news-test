import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            ...defaultTheme.screens,
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1440px"
        },
        extend: {
            colors: {
                "gray-light": "rgba(236,241,244,0.5)"
            },
            zIndex: {
                60: 60,
                100: 100,
                1000: 1000
            }
        }
    },
    plugins: [require("daisyui"), require("tailwindcss")],
    daisyui: {
        themes: ["light", "dracula"]
    }
};
