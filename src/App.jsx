import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ForgotPass from './pages/ForgotPass'
import Passwordchange from './pages/Passwordchange'
import Register from './pages/Register'
import Login from './pages/Login'


const routes = [
  {
    path: '/',
    element: <Register/>
  },
  {
    path: '/forgot',
    element: <ForgotPass />,
  }, 
  {
    path: '/passwordchange/:token',
    element: <Passwordchange />
  },
  {
    path:'/login',
    element:<Login/>
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