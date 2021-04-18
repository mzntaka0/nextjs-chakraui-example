import {AppProps} from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import {SWRConfig} from 'swr'
import {RecoilRoot} from 'recoil'

import {fetcher} from 'lib/services'
import {worker} from 'lib/services/mocks/browser'


if (process.env.API_MOCKING === 'enabled') {
  require('../lib/services/mocks')
}



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
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SWRConfig>
    </ChakraProvider>
  )
}

export default MyApp
