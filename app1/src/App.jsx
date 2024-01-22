import React from 'react'
import LayOut from './Component/LayOut/LayOut'
import{createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import NotFound from './Component/NotFound/NotFound'


let routers = createBrowserRouter([{
  path:"",element:<LayOut/>,children:[
    {index:true,element:<Gallery/>},
    {path:"about",element:<About/>},
    {path:"home",element:<Home/>},
    {path:"*",element:<NotFound/>}
  ]
}])
export default function App() {
  return (
<RouterProvider router={routers}/>
  )
}
