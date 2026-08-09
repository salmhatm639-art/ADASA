import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Details from './Pages/BlogDetails/Details'
import NotFound from './Pages/NotFound/NotFound'
import Layout from './Pages/Layout'

function App() {
  const MyRouter = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'blog',element:<Blog/>},
      {path:'blog/:id',element:<Details/>},
      {path:'*',element:<NotFound/>}

    ]}
  ])

  return (
    <>

      <RouterProvider router={MyRouter}/>

    </>
  )
}

export default App
