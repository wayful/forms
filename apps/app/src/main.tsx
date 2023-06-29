import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import theme from './theme'
import router from './router'

const auth = {
  domain: "dev-o5hp3fq55z54rdka.us.auth0.com",
  clientId: "tmCfXg7gtV6rJpj5ZQOJzfRsj1zYiFti",
  authorizationParams: { redirect_uri: window.location.origin },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth0Provider {...auth}>
        <RouterProvider router={router} />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
