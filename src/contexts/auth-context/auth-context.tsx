/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, {
  createContext, useContext, useState,
} from 'react'
import { UserProps } from '../../domain/models/user'

const AuthContext: any = createContext(null)

export function AuthProvider(props: any): JSX.Element {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState<UserProps.Model>()
  const [loading, setLoading] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userLoaded: !!user,
        loading,
        user,
        setUser,
        setLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): any => {
  const context: any = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a provider AuthProvider')
  }
  return { ...context }
}
