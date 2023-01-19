import '@/styles/globals.css'
<<<<<<< HEAD
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
=======
import { ChakraProvider } from '@chakra-ui/react'
>>>>>>> 3dfc83190e33becd9e7b165986e39adbc38f0670

export default function App({ Component, pageProps }) {
  return <>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}
