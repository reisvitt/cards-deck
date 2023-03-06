/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react'
import {
  Route, Routes, useNavigate,
} from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context/auth-context'

type RouteFactoryProps = {
  routes: {
    layout: any;
    pages: {
      path: string;
      component: React.FC;
      meta?: React.FC;
      exact?: boolean;
      auth?: boolean;
    }[];
  }[];
};

const ProtectedRoute = (props: any): any => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const notAllowed = !user || !user?.name

  useEffect(() => {
    if (notAllowed) {
      navigate('/')
    }
  }, [notAllowed, navigate])

  if (notAllowed) {
    return null
  }
  // eslint-disable-next-line consistent-return
  return props.children
}

export const RouteFactory: React.FC<RouteFactoryProps> = ({
  routes,
}: RouteFactoryProps) => (
  <Routes>
    {routes.map(({ layout: Layout, pages }) => (
      pages.map(({ path, component: Component, ...page }: any) => (
        <Route
          key={`${page.exact}`}
          element={page.auth
            ? (
              <ProtectedRoute>
                <Layout>
                  <Component />
                </Layout>
              </ProtectedRoute>
            )
            : (
              <Layout>
                <Component />
              </Layout>
            )}
          {...page}
          path={path}
          exact={page.exact || true}
        />
      ))
    ))}
  </Routes>
)
