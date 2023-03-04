import React from 'react'
import { ContainerStyled, RowStyled } from './styles'

function LoginLayout({ children }: any): JSX.Element {
  return (
    <ContainerStyled fluid>
      <RowStyled className="h-100">
        {children}
      </RowStyled>
    </ContainerStyled>
  )
}

export default LoginLayout
