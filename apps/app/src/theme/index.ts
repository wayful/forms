import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

import Card from './Card';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#F7FAFC',
      100: '#F2F2F2', // '#EDF2F7'
      200: '#E2E8F0',
      300: '#D4D4D4', // '#CBD5E0'
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
  },
  components: {
    Card,
  }
});

export default theme
