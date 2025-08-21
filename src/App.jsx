import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import { Children } from 'react'
import Passwordchange from './pages/Passwordchange'


const routes = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/forgot',
    element: <ForgotPass />,
  },
  {
    path: '/passwordchange/:token',
    element: <Passwordchange />
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

const App = () => {
  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }} />

}

export default App