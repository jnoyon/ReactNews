import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './layouts/HomeLayout';

const router = createBrowserRouter([
  {
      path: "/",
      element: <HomeLayout></HomeLayout>
  },
  {
      path: "/news",
      element: <h1> News Layout </h1> 
  },
  {
      path: "auth",
      element: <h1> Login </h1>
  },
  {
      path: "*",
      element: <h1> Error</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
