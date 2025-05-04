import { useEffect, useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/moviedetails/:id",
    element:<MovieDetails />
  }
])

function App() {
  
  return <RouterProvider router={router} />
  
}

export default App
