import React from 'react'
import * as S from './styles'

type Card = {
  valor: string,
  icon: JSX.Element,
  color: string
}

function CardBackground({ icon, valor, color }: Card): JSX.Element {
  return (
    <S.Container>
      <S.NumberTop color={color}>{valor}</S.NumberTop>
      {icon}
      <S.NumberBottom color={color}>{valor}</S.NumberBottom>
    </S.Container>
  )
}

export default CardBackground
