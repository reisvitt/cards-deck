import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const ContainerStyled = styled(Container)`
  height: 100vh;
  background-color: ${theme.colors.mainBg};
`

export const ContainerCards = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  >:nth-child(1) {
    transform: translateX(30px) rotate3d(1,1,1, -12deg) translateY(15px);
  }
  >:nth-child(2) {
    transform: translateX(0) translateY(-15px);
  }
  >:nth-child(3) {
    transform: translateX(-30px) translateY(15px) rotate3d(1,1,1, 12deg);
  }


  @media (min-width: ${theme.breakpoints[2]}) {
    >:nth-child(1) {
      transform: translateX(100px) rotate3d(1,1,1, -12deg) translateY(15px);
    }

    >:nth-child(2) {
      transform: translateX(-10px) translateY(-30px);
    }

    >:nth-child(3) {
      transform: translateX(-140px) translateY(15px) rotate3d(1,1,1, 12deg);
    }
  }
`
export const RowStyled = styled(Row)`
  height: 100vh;
  position: relative; 
  z-index: 2;
  backdrop-filter: ${(props) => (props.auth ? 'blur(6px)' : 'initial')};
  overflow: auto;
`
