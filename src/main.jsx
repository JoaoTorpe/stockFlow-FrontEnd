import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './routes/Product'
import { Insights } from './routes/Insights'
import Supllier from './routes/Supllier'
const router =  createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children:[{
    path: "/products",
    element: <Product/>
  },{
  path: "/insights",
  element: <Insights/>
  },
  {
    path: "/supllier",
    element: <Supllier/>
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
