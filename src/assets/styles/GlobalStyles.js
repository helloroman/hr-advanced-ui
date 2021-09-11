import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'IBM Plex Mono', monospace;
    color: black;
  }
`