import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  position: relative;
  width: 45vw;
  aspect-ratio: 57/89;
  background-color: #FFF;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: -10px 0px 17px 2px rgba(0,0,0,0.15);

  svg {
    height: 7vh;
    width: 7vh;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    width: 20vw;
    
    svg {
      height: 5vw;
      width: 5vw;
    }
  }
  
`

export const NumberTop = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
  color: ${(props) => props.color};
  font-size: 2em;
  font-family: initial;
  
  @media (min-width: ${theme.breakpoints[2]}) {
    font-size: 3.5em;
  }
`

export const NumberBottom = styled(NumberTop)`
  top: unset;
  left: unset;
  right: 15px;
  bottom: 10px;
`
