import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  width: 48%;
  aspect-ratio: 57/89;
  background-color: #FFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
  padding: 1em;

  -webkit-box-shadow: 0px 0px 7px 3px rgba(0,0,0,0.15);

  @media (min-width: ${theme.breakpoints[2]}) {
    width: 12%;
    margin-bottom: 1em;
  }
  
`

export const NumberTop = styled.div`
  color: ${theme.colors.primary};
  font-size: 1em;
  font-weight: bold;
  text-align: end;
  margin-bottom: 5%;
  
  @media (min-width: ${theme.breakpoints[2]}) {
    font-size: 1em;
  }
`

export const Image = styled.img`
  width: 95%;
  margin: 0 auto;
`

export const Name = styled.h4`
  text-align: center;
  color: ${theme.colors.primary};
  -webkit-line-clamp: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: ${theme.font.semiBold};
  margin: 0.5em 0;
`

export const List = styled.ul`
  color: ${theme.colors.primary};
  max-width: 100%;
  font-size: ${theme.font.sizes.mini};
  font-weight: ${theme.font.normal};
  margin: 0;
  padding-left: 19px;
  line-break: anywhere;
`
