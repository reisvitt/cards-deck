import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ContainerInfo = styled.form`
  width: 95%;
  max-width: 500px;
  padding: 5em 2em 3em 2em;
  background: rgba(0,0,0, 0.5);
  border-radius: 0.5em;
  backdrop-filter: blur(15px);

  @media (min-width: ${theme.breakpoints[2]}) {
    padding: 5em 3em 4em 3em;
  }
`

export const Field = styled.div` 
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1.2em;
  color: #FFF;
  position: absolute;
  top: 50%;
  left: 0px;
  z-index: 2;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.4s;
`

export const Input = styled.input`
  height: 100%;
  font-size: 1.2em;
  background: transparent;
  border: none;
  color: #FFF;
  margin-right: 40px;
  width: 100%;

  &:focus + ${Label}, &:valid ~ ${Label} {
    top: -12px;
    font-size: 1em;
  }
  
`

export const InputBox = styled.div` 
  display: flex;
  position: relative;
  height: 40px;
  margin-bottom: 1em;
  border-bottom: 2px solid #FFF;

  svg {
    position: absolute;
    bottom: 10px;
    right: 0px;
    z-index: 2;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 1em;
  border-radius: 2em;
  padding: 1em 0;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
`
