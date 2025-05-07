// src/theme.ts
import { extendTheme } from '@chakra-ui/react';

const colors = {
  icterine: {
    50: '#fcfcdf',
    100: '#f8f9c0',
    200: '#f5f6a0',
    300: '#f1f380',
    400: '#edf060',
    500: '#e7eb23',
    600: '#b6b911',
    700: '#797b0b',
    800: '#3d3e06',
    900: '#3d3e06', // fallback for 900
  },
  cardinal: {
    50: '#f6d1d6',
    100: '#eca4ad',
    200: '#e37684',
    300: '#da485c',
    400: '#c5283d',
    500: '#9c2030',
    600: '#751824',
    700: '#4e1018',
    800: '#27080c',
    900: '#27080c', // fallback for 900
  },
  french_gray: {
    50: '#f6f7f9',
    100: '#edeff2',
    200: '#e4e7ec',
    300: '#dbdfe6',
    400: '#d2d7df',
    500: '#a0aabb',
    600: '#6d7d97',
    700: '#485365',
    800: '#242a33',
    900: '#242a33', // fallback for 900
  },
  space_cadet: {
    50: '#ced0df',
    100: '#9da0bf',
    200: '#6d71a0',
    300: '#4a4d72',
    400: '#2b2d42',
    500: '#222334',
    600: '#191b27',
    700: '#11121a',
    800: '#08090d',
    900: '#08090d', // fallback for 900
  },
  night: {
    50: '#d5c8cc',
    100: '#ab929a',
    200: '#7c5f69',
    300: '#45353b',
    400: '#0d0a0b',
    500: '#0c090a',
    600: '#090707',
    700: '#060405',
    800: '#030202',
    900: '#030202', // fallback for 900
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'french_gray.50',
        color: 'night.400',
        lineHeight: '1.6',
      },
      a: {
        color: 'cardinal.400',
        _hover: {
          textDecoration: 'underline',
          color: 'cardinal.300',
        },
      },
    },
  },
});

export default theme;