import React from 'react'
import { redirect } from 'react-router-dom'
import NoAuth from '../no-auth'
import { useAuth } from '../../../contexts/auth-context/auth-context'
import * as S from './styles'

function Auth({ children }: any): JSX.Element {
  const { user, setUser } = useAuth()

  const goBack = (): void => {
    setUser(undefined)
    redirect('/')
  }

  return (
    <NoAuth auth>
      <S.Header>
        <S.Button onClick={goBack}>Tela Inicial</S.Button>
        <S.Name>
          {user?.name}
        </S.Name>
      </S.Header>
      {children}
    </NoAuth>
  )
}

export default Auth
