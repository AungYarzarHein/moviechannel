import { useEffect, useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import AppLayout from './layouts/AppLayout';
import Pagination from './pages/MoviePagination';








const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/moviedetails/:id",
        element: <MovieDetails />
      },
      {
        path:"/pagination",
        element: <Pagination />
      }
    ]
  }
  
]);



function App() {
  
  return <RouterProvider router={router} />
  
}

export default App
