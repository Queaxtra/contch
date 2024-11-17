import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "cWhiteGray": "#1B1B1B"
      }
    }
  },

  plugins: []
} as Config;
