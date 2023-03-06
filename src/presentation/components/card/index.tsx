import React from 'react'
import * as S from './styles'

type CardProps = {
 data: {
  valor?: number,
  url: string,
  color: string,
  name: string,
  gender: string,
  species: string,
  type: string,
  location: string,
 }
}

function Card({ data }: CardProps): JSX.Element {
  return (
    <S.Container>
      <S.NumberTop
        title={`${data.valor} pontos`}
      >
        {data.valor}
        {' '}
        pontos
      </S.NumberTop>
      <S.Image
        src={data.url}
        alt={`Imagem de ${data.name}`}
        title={`Imagem de ${data.name}`}
      />
      <S.Name title={data.name}>
        {data.name}
      </S.Name>

      <S.List>
        <li title={data.gender}>{data.gender}</li>
        <li title={data.species}>{data.species}</li>
        <li title={data.location}>{data.location}</li>
      </S.List>
    </S.Container>
  )
}

export default Card
