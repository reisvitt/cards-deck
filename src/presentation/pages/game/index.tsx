import React from 'react'
import { RickMortyProps } from '../../../domain/models/rick-morty-data'
import Card from '../../components/card'
import Loading from '../../components/loading/loading'
import * as S from './styles'

type GameProps = {
  list: RickMortyProps.Model[]
  loading: boolean
  loadingMore: boolean
  reorder: () => void
  reload: () => void
  oneMore: () => void
  setMin: (min: number) => void
  setMax: (max: number) => void
  min: number,
  max: number
}

function Game({
  list, loading, loadingMore, reorder, oneMore, setMin, setMax, min, max, reload,
}: GameProps): JSX.Element {
  return (
    <S.Container>
      {loading && <Loading />}

      {!loading && (
      <>
        <S.ContainerControlls>
          <S.Field>
            <S.Label>Mínimo</S.Label>
            <S.Input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value, 10))} />
          </S.Field>
          <S.Field>
            <S.Label>Máximo</S.Label>
            <S.Input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value, 10))} />
          </S.Field>
        </S.ContainerControlls>

        <S.ContainerButtons>
          <S.RedButton
            type="button"
            disabled={loading || loadingMore}
            onClick={reload}
          >
            Reload
          </S.RedButton>
          <S.BlueButton
            type="button"
            onClick={reorder}
          >
            Embaralhar
          </S.BlueButton>

          <S.GreenButton
            type="button"
            disabled={loadingMore || list?.length >= max}
            onClick={oneMore}
          >
            {loadingMore ? 'Carregando...' : 'Mais uma carta'}
          </S.GreenButton>
        </S.ContainerButtons>

        <S.ContainerList>
          {list && list?.length > 0 && list.map(((card) => (
            <Card
              key={card.id}
              data={{
                url: card.image,
                color: 'red',
                valor: card.points,
                name: card.name,
                gender: card.gender,
                species: card.species,
                location: card?.location?.name,
                type: card.type,
              }}
            />
          )))}
        </S.ContainerList>
      </>
      )}

    </S.Container>
  )
}

export default Game
