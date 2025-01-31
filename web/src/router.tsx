import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/commerce/Home'
import { CommerceLayout } from './pages/_layouts/commerce'
import { SignUp } from './pages/auth/SignUp'
import { AuthLayout } from './pages/_layouts/auth'

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
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
])
