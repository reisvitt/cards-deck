import React from 'react'
import { AuthProvider } from '../../contexts/auth-context/auth-context'
import { RouteFactory } from './route-factory'

import { NoAuthLayout, AuthLayout } from '../layout'
import MakeHome from '../../../main/factories/pages/home'
import MakeGame from '../../../main/factories/pages/game'

function Routes():JSX.Element {
  const routes = [
    {
      layout: AuthLayout,
      pages: [
        {
          path: '/game', component: MakeGame, exact: true, auth: true,
        },
      ],
    },
    {
      layout: NoAuthLayout,
      pages: [
        { path: '/', component: MakeHome, exact: true },
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
