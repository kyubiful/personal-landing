module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInPage: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInPopup: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(0.0deg)' },
          '60%': { transform: 'rotate(14deg)' },
          '70%': { transform: 'rotate(-8deg)' },
          '80%': { transform: 'rotate(14deg)' },
          '90%': { transform: 'rotate(-4deg)' },
          '100%': { transform: 'rotate(10.0deg)' }
        },
        typing: {
          from: {
            width: '0'
          }
        },
        blink: {
          '50%': { 'border-color': 'transparent' }
        },
        displayText: {
          from: {
            opacity: '0'
          }
        },
        openMobileMenu: {
          '0%': { transform: 'translateX(320px)' },
          '100%': { left: '0px' }
        }
      },
      animation: {
        'fade-in': 'fadeInPage 1.5s ease-in-out',
        'waving-hand': 'wave 2s linear',
        writing: 'typing 3s steps(14), blink .5s infinite step-end alternate',
        'display-text': 'displayText 1.5s steps(1)',
        'open-mobile-menu': 'openMobileMenu .2s linear',
        popup: 'fadeInPopup 3s linear'
      }
    },
    fontFamily: {
      cascadia: ['Cascadia', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    }
  },
  plugins: []
}
