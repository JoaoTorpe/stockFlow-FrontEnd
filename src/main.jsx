import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App'; 
import Product from './routes/Product';
import Insights from './routes/Insights';
import Supllier from './routes/Supllier'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/insights",
        element: <Insights />
      },
      {
        path: "/supplier",
        element: <Supllier />
      }
    ]
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
