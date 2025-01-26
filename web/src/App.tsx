import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}
