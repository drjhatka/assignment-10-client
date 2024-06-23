import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/static/Error.jsx';
import Home from './components/dynamic/Home.jsx';
import AddCraft from './components/dynamic/AddCraft.jsx';
import AuthProvider from './components/auth/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/add-craft',
        element:<AddCraft/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
