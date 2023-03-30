import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.yellow}
  }
  body {
    background-color:  ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  h1{
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;

  }

  p{
    color: ${(props) => props.theme['base-subtitle']};
  }

  body, input-security, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
`
