import { createBrowserRouter } from "react-router-dom"
import MainLaout from "../Layout/MainLayout"
import NotFound from "../Pages/NotFound/NotFound"
import Home from "../Pages/Home/Home"


const route =  createBrowserRouter([
  {
    path : "/",
    element : <MainLaout />,
    errorElement : <NotFound />,
    children : [
      {
        path : "/",
        element : <Home />
      }
    ]
  }
])

export default route
