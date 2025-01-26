import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    height: 100vh;
    font-family: "Roboto", serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  /* border-style, input-security, textarea, button {
    font: 400 1rem Robot, sans-serif;
  } */

  input {
    all: unset;
    background-color: white;
    text-indent: 16px;
  }

  ::-webkit-scrollbar {
    width: 6px; /* Barra de rolagem fina */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* O trilho é invisível */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0; /* Cor suave para a barra de rolagem */
    border-radius: 10px; /* Cantos arredondados */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0; /* Cor da barra ao passar o mouse */
  }

  scrollbar-width: thin; /* Para navegadores compatíveis com o padrão */
  scrollbar-color: #c0c0c0 transparent; /* Cor da barra e do trilho no Firefox */
 `
