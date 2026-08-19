// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Odibrick Design System
        cream: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F8FAFC',
        },
        terracotta: {
          DEFAULT: '#004AAD',
          50: '#E6F0FA',
          100: '#CCE0F5',
          200: '#99C2EB',
          300: '#66A3E0',
          400: '#004AAD',
          500: '#003B8B',
          600: '#002D6B',
          700: '#001F4C',
        },
        dark: {
          DEFAULT: '#1C1B1A',
          50: '#F5F5F4',
          100: '#E8E7E5',
          200: '#C5C3BF',
          300: '#9E9B96',
          400: '#5A5856',
          500: '#3D3B39',
          600: '#2A2927',
          700: '#1C1B1A',
          800: '#141312',
          900: '#0C0B0A',
        },
        sand: {
          DEFAULT: '#E2E8F0',
          50: '#FBF8F5',
          100: '#F5EDE3',
          200: '#E2E8F0',
          300: '#D4B99A',
          400: '#C09B72',
        },
        muted: '#5A5856',
      },
      fontFamily: {
        'sans': [
          'Manrope',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        'body': [
          'Manrope',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-terracotta': 'linear-gradient(135deg, #004AAD, #003B8B)',
        'gradient-dark': 'linear-gradient(135deg, #1C1B1A, #2A2927)',
      },
      boxShadow: {
        'terracotta': '0 4px 14px 0 rgba(0, 74, 173, 0.25)',
        'card': '0 1px 3px 0 rgba(28, 27, 26, 0.06), 0 1px 2px -1px rgba(28, 27, 26, 0.06)',
        'card-hover': '0 10px 25px -5px rgba(28, 27, 26, 0.1), 0 8px 10px -6px rgba(28, 27, 26, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}