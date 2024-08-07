import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'

// components
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
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
