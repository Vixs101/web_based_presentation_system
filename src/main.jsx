import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path:'/',
    element: <LoginPage/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
