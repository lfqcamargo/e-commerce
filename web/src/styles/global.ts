import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    height: 100vh;
    font-family: ${(props) => props.theme['font-primary']}, serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  input {
    all: unset;
    background-color: white;
    text-indent: 16px;
  }

 `
