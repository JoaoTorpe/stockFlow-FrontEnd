import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './routes/Product'

const router =  createBrowserRouter([
{
  path: "/",
  element: <App/>
},
{
  path:"products",
  element: <Product/>
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
