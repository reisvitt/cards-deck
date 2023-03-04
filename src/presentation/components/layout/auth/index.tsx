import React from 'react'
import NoAuth from '../no-auth'
import * as S from './styles'

function Auth({ children }: any): JSX.Element {
  return (
    <NoAuth>
      <S.Header>Header</S.Header>
      {children}
    </NoAuth>
  )
}

export default Auth
