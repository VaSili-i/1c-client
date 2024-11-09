import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      // Основные цвета
      'main-color': {
        default: '#1192e6',
        _dark: '#1192e6' // Цвет для темной темы
      },
      'secondary-color': {
        default: '#0a8f85',
        _dark: '#0a8f85'
      },
      'primary-color': {
        default: '#00dfc4',
        _dark: '#00dfc4'
      },
      'reverse-secondary-color': {
        default: '#051a40',
        _dark: '#051a40'
      },
      'bg-color': {
        default: '#1f2a3d',
        _dark: '#1f2a3d'
      },
      'reverse-bg-color': {
        default: '#061b29',
        _dark: '#061b29'
      },
      'reverse-main-color': {
        default: '#0a476e',
        _dark: '#0a476e'
      },
      'up-bg-color': {
        default: '#061432',
        _dark: '#061432'
      },
      'delete-color': {
        default: '#982c2c',
        _dark: '#982c2c'
      },
      // Тексты
      text: {
        default: 'gray.900',
        _dark: 'gray.50'
      },
      error: 'red.500'
    }
  }
});

export default customTheme;
