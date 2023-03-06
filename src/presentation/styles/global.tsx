import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components'
import { theme } from './theme'

export const GlobalStyle: GlobalStyleComponent<
  object,
  DefaultTheme
> = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    outline: none;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
  }

  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.25);}
    100% {transform: scale(1);}
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  button{
    border: none;
    font-family: ${theme.font.poppins};
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.35;
    background: ${theme.colors.mainBg};
    color: ${theme.colors.black};
  }

  body, input, textarea {
    font-family: ${theme.font.poppins};
    &:focus {
      outline: inherit;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.poppins};
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
  }

`
