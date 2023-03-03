
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import AuthContextProvider from "../../context/authContext"


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from '@/redux/store';
import axios from 'axios'
config.autoAddCss = false

axios.defaults.baseURL = `http://localhost:8080`;

export default function App({ Component, pageProps }) {

  return (

    <ChakraProvider>
      <AuthContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    </ChakraProvider>
  )
}
