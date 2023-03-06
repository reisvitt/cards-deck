import React from 'react'
import NoAuth from '../no-auth'
import { useAuth } from '../../../contexts/auth-context/auth-context'
import * as S from './styles'

function Auth({ children }: any): JSX.Element {
  const { user } = useAuth()

  return (
    <NoAuth auth>
      <S.Header>
        <S.Name>
          {user?.name}
        </S.Name>
      </S.Header>
      {children}
    </NoAuth>
  )
}

export default Auth
