import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'

// components
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
  ])

  return <RouterProvider router={routes} />
}

export default App
