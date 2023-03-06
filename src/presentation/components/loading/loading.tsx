/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'

interface LoadingInterface {
  onlySpinner?: boolean,
  borderWidth?: string,
  width?: string,
  height?: string,
  color?: string,
}

function Loading({ onlySpinner, ...props }: LoadingInterface): JSX.Element {
  if (onlySpinner) {
    return <Spinner {...props} />
  }

  return (
    <Container>
      <Label>Carregando...</Label>
      <Spinner {...props} />
    </Container>
  )
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

interface SpinnerInterface {
  borderWidth?: string,
  height?: string | number,
  width?: string | number,
  color?: string,
}

const Spinner = styled.div<SpinnerInterface>`
  border: ${(props) => props?.borderWidth || '8px'} solid transparent;
  border-left-color:${(props) => props?.color || theme.colors.primary};
  border-radius: 50%;
  width: ${(props) => props?.width || '50px'};
  height: ${(props) => props?.height || '50px'};
  animation: ${rotate} 1s linear infinite;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
`

const Label = styled.label`
  color: ${theme.colors.primary};
  font-weight: 700;
  margin-bottom: 30px;
  font-size: ${theme.font.sizes.small};
`

export default Loading
