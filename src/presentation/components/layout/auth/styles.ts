import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Header = styled.header`
  width: 100%;
  background-color: rgba(255,255,255, 1);
  display: flex;
  justify-content: space-between;
  padding: 1.5em 2em;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
`

export const Name = styled.h4`
  color: ${theme.colors.primary};
  letter-spacing: 1px;
  font-size: ${theme.font.sizes.xsmall};
`

export const Button = styled.button`
  color: ${theme.colors.primary};
  cursor: pointer;
  font-size: ${theme.font.sizes.xsmall};
  font-weight: bold;
  letter-spacing: 1px;
  background: transparent;
`
