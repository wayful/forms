import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)

export default defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      borderWidth: '1px',
      borderColor: 'gray.300',
    },
  //   header: {
  //     paddingBottom: '2px',
  //   },
  //   body: {
  //     paddingTop: '2px',
  //   },
  //   footer: {
  //     paddingTop: '2px',
  //   },
  }),
  sizes: {
    md: definePartsStyle({
      container: {
        padding: 6,
        borderRadius: '24px',
      },
      header: {
        padding: 0,
        paddingBottom: 4,
        marginBottom: 6,
        borderBottom: '1px',
        borderColor: 'gray.300',
      },
      body: {
        padding: 0,
      },
      footer: {
        padding: 0,
        marginTop: 6,
      },
    }),
  }
});