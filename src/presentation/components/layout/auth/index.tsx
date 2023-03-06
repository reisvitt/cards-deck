import React from 'react'
import { useAuth } from '../../../../contexts/auth-context/auth-context'
import NoAuth from '../no-auth'
import * as S from './styles'

function Auth({ children }: any): JSX.Element {
  const { user } = useAuth()

  return (
    <NoAuth>
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
