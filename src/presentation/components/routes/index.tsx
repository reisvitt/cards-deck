import React from 'react'
import { AuthProvider } from '../../../contexts/auth-context/auth-context'
import { RouteFactory } from './route-factory'

import { NoAuthLayout } from '../layout'
import MakeHome from '../../../main/factories/pages/home'

function Routes():JSX.Element {
  const routes = [
    {
      layout: NoAuthLayout,
      pages: [
        { path: '/', component: MakeHome },
      ],
    },
  ]

  return (
    <AuthProvider>
      <RouteFactory routes={routes} />
    </AuthProvider>
  )
}

export default Routes
