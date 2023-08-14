import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'detective-painting': "url('/assets/detective-painting.jpg')",
        'finger-prints-bg': "url('/assets/finger-prints-background.png')",
        'crumpled-paper': "url('/assets/crumpled-paper.jpg')",
        'blur-separator': "url('/assets/background-with-posters.png')",
      },
      boxShadow: {
        'image': '0px 0px 10px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'overlay': "rgba(0, 0, 0, 0.85)",
      }
    },
  },
  plugins: [],
}
export default config
