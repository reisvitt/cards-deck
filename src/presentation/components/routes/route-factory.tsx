/* eslint-disable react/function-component-definition */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth-context/auth-context'

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
  if (!user) {
    return
  }

  const allowed = !!user?.name

  if (!allowed) {
    return
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
          path={path}
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
          exact={page.exact || true}
        />
      ))
    ))}
  </Routes>
)
