import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Lista from './pages/Lista'
import Filme from './pages/Filme'
import Home from './pages/Home'

const router = createBrowserRouter([
  { path: '/movies', element: <Lista /> },
  { path: '/movies/:id', element: <Filme /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
