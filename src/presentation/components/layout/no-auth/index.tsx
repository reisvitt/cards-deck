import React from 'react'
import { Ouros, Copas, Espadas } from '../../../assets/svgs'
import { theme } from '../../../styles/theme'
import CardBackground from '../../card-background'
import * as S from './styles'

function BaseLayout({ children, auth = false }: any): JSX.Element {
  return (
    <S.ContainerStyled fluid>
      <S.ContainerCards>

        <CardBackground
          valor="R"
          color={theme.colors.red}
          icon={<Ouros />}
        />

        <CardBackground
          valor="M"
          color={theme.colors.red}
          icon={<Copas />}
        />

        <CardBackground
          valor="S"
          color={theme.colors.black}
          icon={<Espadas />}
        />

      </S.ContainerCards>

      <S.RowStyled className="h-100" auth={auth}>
        {children}
      </S.RowStyled>
    </S.ContainerStyled>
  )
}

export default BaseLayout
