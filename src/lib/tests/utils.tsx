import React from "react";
import {RecoilRoot} from 'recoil'
import { render } from "@testing-library/react";
import { SWRConfig } from "swr";

import {fetcher} from 'lib/services'


type Props = {
  children: React.ReactNode
}


// NOTE: inspired by this page: https://frontend-digest.com/using-testing-libary-with-useswr-f595919de2fd
const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
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
        {children}
      </RecoilRoot>
    </SWRConfig>
  )
};


const customRender = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: any) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
