/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure it scans your files
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // ✅ Add DaisyUI plugin
  };