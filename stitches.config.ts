import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';
export type { VariantProps } from '@stitches/react';

type SpaceValue = Stitches.ScaleValue<'space'>;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },

  theme: {
    colors: {
      white: 'hsl(0 0% 100%)',

      'gray-100': 'hsl(240 9% 89%)',
      'gray-300': 'hsl(240 7% 68%)',
      'gray-800': 'hsl(240 6% 17%)',
      'gray-900': 'hsl(192 6% 8%)',

      'cyan-500': 'hsl(192 95% 68%)',
      'cyan-900': 'hsl(192 14% 14%)',

      'yellow-500': 'hsl(40 84% 51%)',
      'green-500': 'hsl(146 96% 42%)',

      background: '$gray-900',
    },

    space: {
      px: '1px',
      1: '.25rem', // 4px
      2: '.5rem', // 8px
      3: '.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      8: '2rem', // 32px
      10: '2.5rem', // 40px
      12: '3rem', // 48px
      16: '4rem', // 64px
      20: '5rem', // 80px
      40: '10rem', // 160px
      64: '16rem', // 256px
      80: '20rem', // 320px
    },

    fontSizes: {
      xss: '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '4xl': '2rem', // 32px
      '5xl': '2.25rem', // 36px
      '6xl': '3rem', // 48px
      '7xl': '4rem', // 64px
      '8xl': '4.5rem', // 72px
      '9xl': '6rem', // 96px
    },

    fonts: {
      default: 'Roboto, apple-system, sans-serif',
    },

    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900,
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    sizes: {
      maxWidth: '1120px', // 1120px or 70rem
      full: '100%',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      round: '50%',
      full: '9999px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      ligth: '25%',
      semiTransparent: '10%',
    },
  },

  media: {
    mobile: '(max-width: 375px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024px)',
  },

  utils: {
    px: (value: SpaceValue) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: SpaceValue) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: SpaceValue) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: SpaceValue) => ({
      marginTop: value,
      marginBottom: value,
    }),
    boxSize: (value: SpaceValue) => ({
      width: value,
      height: value,
    }),
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
    overflowX: 'hidden',

    '@laptop': {
      fontSize: '93.75%',
    },

    '@tablet': {
      fontSize: '87.5%',
    },
  },

  body: {
    backgroundColor: '$background',
    color: '$white',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 600,
  },

  button: {
    background: 'transparent',
    outline: 0,
    border: 0,
    cursor: 'pointer',
  },

  '[disabled]': {
    opacity: '$intense',
    cursor: 'not-allowed',
  },
});

export type CSS = Stitches.CSS<typeof config>;
