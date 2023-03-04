import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const ContainerStyled = styled(Container)`
  height: 100vh;
  background-color: ${theme.colors.mainBg};
`
export const RowStyled = styled(Row)`
  height: 100vh;
`
