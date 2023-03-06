import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../presentation/components/routes'
import { GlobalStyle } from '../presentation/styles/global'

function Main(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  )
}

export default Main
