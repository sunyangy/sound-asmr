/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', "monospace"], // 添加你的自定义等宽字体
      },
    },
  },
  plugins: [],
};
