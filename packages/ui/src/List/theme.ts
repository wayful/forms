import { ComponentStyleConfig } from "@chakra-ui/react"

export const listTheme: ComponentStyleConfig = {
  parts: ['list', 'item', 'label', 'drag', 'checkbox'],
  baseStyle: ({ colorMode, colorScheme }) => ({
    list: {
      width: '100%',
    },
    item: {
      borderRadius: 'md',

      textStyle: 'paragraph',

      color: colorMode === 'light' ? `@TODO` : `${colorScheme}.400`,

      _active: {
        color: colorMode === 'light' ? `@TODO` : `${colorScheme}.white`,
        bg: colorMode === 'light' ? `@TODO` : `${colorScheme}.800`,
      },

      _hover: {
        bg: colorMode === 'light' ? `@TODO` : `${colorScheme}.800`,
        // color: colorMode === 'light' ? `@TODO` : `${colorScheme}.400`,
      },
    },
    // button: {
    //   flex: 1,
    //   // display: 'flex',
    //   // textAlign: 'start',
    //   // alignItems: 'center',
    //   userSelect: 'none',
    //   // textDecoration: 'none',

    //   _active: {
    //     bg: colorMode === 'light' ? `@TODO` : `${colorScheme}.white`,
    //     color: colorMode === 'light' ? `@TODO` : `${colorScheme}.900`,
    //   },
      
    //   outline: 0,
    //   _focus: {
    //     boxShadow: 'outline',
    //   },
    // },
    label: {
      flex: 1,
      textAlign: 'start',

      borderRadius: 'md',

      py: '10px',
      px: '12px',

      textStyle: 'body'
    },
    stat: {
      flex: 0,
      textAlign: 'start',

      borderRadius: 'md',

      py: '10px',
      px: '12px',

      color: colorMode === 'light' ? `@TODO` : `${colorScheme}.600`,
      textStyle: 'meta'
    },
    drag: {
      cursor: 'move',
      display: 'flex',
      alignItems: 'center',
      paddingStart: '10px',
      paddingEnd: '10px',
      borderRadius: 'md',
      
      _hover: {
        bg: colorMode === 'light' ? `${colorScheme}.200` : `${colorScheme}.700`,
      },
    },
    checkbox: {
      paddingStart: '10px',
      paddingEnd: '10px',
      borderRadius: 'md',
    }
  }),
  sizes: {
    // sm: {
    //   item: {
    //     px: 2,
    //     py: 2,
    //     fontSize: 'xl'
    //   },
    //   checkbox: {
    //     size: 'sm'
    //   }
    // },
    md: {
      // item: {
      //   px: 2.5,
      //   py: 2.5,
      //   fontSize: '2xl'
      // }
    },
    // lg: {
    //   item: {
    //     px: 2.5,
    //     py: 2.5,
    //     fontSize: '4xl'
    //   }
    // },
  },
  variants: {},
  defaultProps: {
    size: 'md',
    colorScheme: 'gray'
  },
}

export default listTheme
