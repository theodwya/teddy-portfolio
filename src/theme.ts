// src/theme.ts
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  brand: {
    chartreuse: '#D4E44D', // bright yellow-green (same for light/dark for vibrancy)
    cardinal: '#E31B23',   // bright red (same for light/dark)
    black: '#000000',      // black for light mode text
    white: '#FFFFFF',      // white for dark mode text
    backgroundLight: '#F5F7E0', // pale green background for light mode
    backgroundDark: '#121212',  // very dark gray background for dark mode
    textPrimaryLight: '#000000', // black text in light mode
    textPrimaryDark: '#FFFFFF',  // white text in dark mode
    textSecondaryLight: '#333333', // dark gray text in light mode
    textSecondaryDark: '#CCCCCC',  // light gray text in dark mode
    neutralGrayLight: '#888888',    // gray for borders etc in light mode
    neutralGrayDark: '#666666',     // gray for borders etc in dark mode
  },
};

const fonts = {
  heading: "'Merriweather', serif",
  body: "'Merriweather', serif",
};

const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: mode(colors.brand.backgroundLight, colors.brand.backgroundDark)(props),
      color: mode(colors.brand.textPrimaryLight, colors.brand.textPrimaryDark)(props),
      fontFamily: fonts.body,
      lineHeight: 'tall',
    },
    a: {
      color: mode(colors.brand.chartreuse, colors.brand.chartreuse)(props),
      _hover: {
        textDecoration: 'underline',
        color: mode(colors.brand.cardinal, colors.brand.cardinal)(props),
      },
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: fonts.heading,
      color: mode(colors.brand.black, colors.brand.chartreuse)(props),
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      rounded: 'md',
      fontFamily: fonts.body,
    },
    variants: {
      solid: (props: { colorMode: string }) => ({
        bg: mode(colors.brand.chartreuse, colors.brand.chartreuse)(props),
        color: mode(colors.brand.black, colors.brand.black)(props),
        _hover: {
          bg: mode('#b5cc3a', '#9ebc2f')(props), // slightly darker chartreuse on hover
        },
      }),
      outline: (props: { colorMode: string }) => ({
        borderColor: mode(colors.brand.cardinal, colors.brand.cardinal)(props),
        color: mode(colors.brand.cardinal, colors.brand.cardinal)(props),
        _hover: {
          bg: mode(colors.brand.cardinal, colors.brand.cardinal)(props),
          color: mode(colors.brand.backgroundLight, colors.brand.backgroundDark)(props),
        },
      }),
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;