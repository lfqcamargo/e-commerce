import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/commerce/Home'
import { CommerceLayout } from './pages/_layouts/commerce'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CommerceLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ],
  },
])
