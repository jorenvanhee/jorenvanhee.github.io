module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',

      'black': '#1d1715',
      'grey-darkest': '#403732',
      // 'grey-darker': '#606f7b',
      // 'grey-dark': '#8795a1',
      'grey': '#c5aba6',
      'grey-light': '#e4d3ce',
      // 'grey-lighter': '#f1f5f8',
      'grey-lightest': '#f9f7f6',
      'white': '#fcfbfb',
    },
    screens: {
      'sm': '500px',
      'md': '600px',
      'lg': '992px',
      'xl': '1200px',
    },
    fontFamily: {
      'sans': [
        'Assistant',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      'serif': [
        'Lora',
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      'mono': [
        // 'Menlo',
        // 'Monaco',
        // 'Consolas',
        // 'Liberation Mono',
        // 'Courier New',
        'monospace',
      ]
    },
    fontSize: {
      // 'xs': '.75rem',     // 12px
      // 'sm': '.875rem',    // 14px
      'code': '0.947368421rem', // 17px
      'base': '1rem', // 18px
      'lg': '1.1111111rem', // 20px
      'xl': '1.3333333rem', // 24px
      '2xl': '1.7777777rem', // 32px
      '3xl': '2rem', // 36px
      // 'lg': '1.125rem',   // 18px
      // 'xl': '1.25rem',    // 20px
      // '2xl': '1.5rem',    // 24px
      // '3xl': '1.875rem',  // 30px
      // '4xl': '2.25rem',   // 36px
      // '5xl': '3rem',      // 48px
    },
    fontWeight: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    lineHeight: {
      'none': 1,
      'tight': 1.3333333,
      'pretty-tight': 1.4444444,
      'normal': 1.6111111,
      'loose': 2,
    },
    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em',
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '3': '3px',
      // '2': '2px',
      // '4': '4px',
      // '8': '8px',
    },
    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    }),
    borderRadius: {
      // 'none': '0',
      'sm': '3px',
      default: '.25rem',
      // 'lg': '.5rem',
      // 'full': '9999px',
    },
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw'
    },
    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      'full': '100%',
      'screen': '100vh'
    },
    minWidth: {
      '0': '0',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh'
    },
    maxWidth: {
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
    },
    maxHeight: {
      'full': '100%',
      'screen': '100vh',
    },
    padding: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
    },
    margin: {
      'auto': 'auto',
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.4444444rem',
      '8': '2rem',
      '9': '2.5rem',
      '10': '3rem',
      '11': '3.5rem',
      '-px': '-1px',
      '-0': '-0',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
    },
    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'sm': '0 2px 3px rgba(207, 199, 195, 0.16)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'none': 'none',
    },
    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },
    fill: {
      'current': 'currentColor',
    },
    stroke: {
      'current': 'currentColor',
    },
  },
  corePlugins: {
    container: false
  },
}
