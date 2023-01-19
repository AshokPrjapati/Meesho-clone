
import {ChakraProvider} from "@chakra-ui/react"

import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function App({ Component, pageProps }) {

  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
