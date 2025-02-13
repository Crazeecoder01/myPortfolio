/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 20px rgba(192, 132, 252, 0.8)",
      },
      textStrokeWidth: {
        sm: "1px",
        DEFAULT: "2px",
        lg: "4px",
      },
      keyframes: {
        resize: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        moveBackground: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(50px) translateY(-50px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        resize: 'resize 1.5s infinite ease-in-out',
        marquee: "marquee 12s linear infinite",
        moveBackground: "moveBackground 10s infinite linear",
      },
      
    },
  },
  plugins: [],
}

