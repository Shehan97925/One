import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './Pages/Cart/Cart.jsx'
import Join from './Pages/Join/Join.jsx'
import Service from './Pages/Service/Service.jsx'
import Loging from './Pages/Loging/Loging.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/log",
    element: <Loging />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
