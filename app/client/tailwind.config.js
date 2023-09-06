/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#f5f5f5',
        gitBlack: '#0d1117',
        gitGray: '#30363d',
        gitBlue: '#2f81f7',
        gitGreen: '#238636',
        gitYellow: '#e3b341',
        gitRed: '#e34c26',
        button: '#21262d'
      }
    }
  },
  plugins: []
}
