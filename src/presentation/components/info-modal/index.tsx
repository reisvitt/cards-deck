import React, { useState } from 'react'
import { Profile } from '../../assets/svgs'
import * as S from './styles'

type InfoModalProps = {
  submit: (name: string) => void
}

function InfoModal({ submit }: InfoModalProps): JSX.Element {
  const [name, setName] = useState<string>('')

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    submit(name)
  }

  return (
    <S.Container>
      <S.ContainerInfo onSubmit={handleSubmit}>
        <S.Field>
          <S.InputBox>
            <Profile size="30px" color="#FFF" />
            <S.Input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.Label>Digite seu nome</S.Label>
          </S.InputBox>
        </S.Field>

        <S.Button type="submit">Continuar</S.Button>
      </S.ContainerInfo>
    </S.Container>
  )
}

export default InfoModal
