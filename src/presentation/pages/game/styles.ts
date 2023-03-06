import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  padding: 1em 0;
`

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5em;
  gap: 4%;

  @media (min-width: ${theme.breakpoints[2]}) {
    gap: 0.572%;
  }
`

export const ContainerButtons = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media (min-width: ${theme.breakpoints[2]}) {
    flex-direction: row;
    align-items: unset;
  }
`

export const Button = styled.button`
  padding: 1em 3em;
  font-size: 1em;
  font-weight: ${theme.font.semiBold};
  color: white;
  background-color: ${theme.colors.green};
  cursor: pointer;
  border-radius: 8px;
  width: 95%;

  :hover {
    background: ${theme.colors.lightGreen};
  }

  :disabled {
    cursor: not-allowed;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    min-width: 200px;
    width: unset;
  }
`

export const BlueButton = styled(Button)`
  background-color: ${theme.colors.gray['200']};
  color: ${theme.colors.primary};

  :hover {
    background-color: ${theme.colors.gray['300']};
  }
`

export const GreenButton = styled(Button)`
  background-color: ${theme.colors.green};

  :hover {
    background-color: ${theme.colors.lightGreen};
  }
`

export const RedButton = styled(Button)`
  background-color: ${theme.colors.red};

  :hover {
    background-color: ${theme.colors.lightRed};
  }
`

export const ContainerControlls = styled.div`
  margin: 0.5em 0;
  display: flex;
  gap: 2em;
  justify-content: center;
`

export const Field = styled.div` 
  display: flex;
  flex-direction: column;
  margin:0 1em;
  width: 100px;
`

export const Label = styled.label`
  font-size: 1em;
  color: #000;
  text-align: center;
`

export const Input = styled.input`
  height: 100%;
  font-size: 1.2em;
  background: #FFF;
  border: none;
  color: #000;

  border-radius: 8px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.15);
`
