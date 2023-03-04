import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from './presentation/components/routes'
import { GlobalStyle } from './presentation/styles/global'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
)
