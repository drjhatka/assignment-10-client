import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Error from './components/static/Error.jsx';
import Home from './components/dynamic/Home.jsx';
import AddCraft from './components/dynamic/AddCraft.jsx';
import AuthProvider from './components/auth/AuthProvider.jsx';
import ViewDetails from './components/dynamic/ViewDetails.jsx';
import ViewAllItems from './components/dynamic/ViewAllItems.jsx';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/add-craft',
        element: <AddCraft />
      },
      {
        path:'/view-details/:id',
        element:<ViewDetails/>
      },
      {
        path:'/view-all-items',
        element:<ViewAllItems/>
      }

    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
