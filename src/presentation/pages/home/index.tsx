import React from 'react'
import { InfoModal } from '../../components'
import * as S from './styles'

type HomeProps = {
  submit: (name: string) => void
}

function Home({ submit }: HomeProps): JSX.Element {
  return (
    <S.Container>
      <InfoModal submit={submit} />
    </S.Container>
  )
}

export default Home
