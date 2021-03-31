import {AppProps} from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import {SWRConfig} from 'swr'

import {fetcher} from 'lib/services'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SWRConfig
        value={{
          fetcher: fetcher,
          onError: (err) => {
            if (process.env.NODE_ENV == 'production') {
              // pass
            } else {
              alert(err)
            }
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default MyApp
