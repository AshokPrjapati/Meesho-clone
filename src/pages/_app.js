
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from '@/redux/store';
import axios from 'axios'
config.autoAddCss = false

// axios.defaults.baseURL = `http://localhost:8080`;
axios.defaults.baseURL = 'https://dull-helmet-wasp.cyclic.app'

export default function App({ Component, pageProps }) {

  return (

    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}
