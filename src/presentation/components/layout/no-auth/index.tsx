import React from 'react'
import { Ouros, Copas, Espadas } from '../../../assets/svgs'
import { theme } from '../../../styles/theme'
import CardBackground from '../../card-background'
import * as S from './styles'

function LoginLayout({ children }: any): JSX.Element {
  return (
    <S.ContainerStyled fluid>
      <S.ContainerCards>

        <CardBackground
          valor="A"
          color={theme.colors.red}
          icon={<Ouros />}
        />

        <CardBackground
          valor="A"
          color={theme.colors.red}
          icon={<Copas />}
        />

        <CardBackground
          valor="A"
          color={theme.colors.black}
          icon={<Espadas />}
        />

      </S.ContainerCards>

      <S.RowStyled className="h-100">
        {children}
      </S.RowStyled>
    </S.ContainerStyled>
  )
}

export default LoginLayout
