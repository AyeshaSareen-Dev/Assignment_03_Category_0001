module.exports = {
    theme: {
      extend: {
        keyframes: {
            'bounce-scale': {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.1)' },
            },
        },
        
        animation: {
            'bounce-scale': 'bounce-scale 0.6s ease-in-out infinite',
          },

        colors: {
          clifford: '#da373d',
        },
      },
    },
  };
  