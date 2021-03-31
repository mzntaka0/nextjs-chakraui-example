import React from 'react'

import Header from './Header'


type Props = {
  children: React.ReactNode
}


const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}


export default Layout
