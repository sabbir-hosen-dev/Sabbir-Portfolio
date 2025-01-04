import { createBrowserRouter } from "react-router-dom"
import MainLaout from "../Layout/MainLayout"
import NotFound from "../Pages/NotFound/NotFound"


const route =  createBrowserRouter([
  {
    path : "/",
    element : <MainLaout />,
    errorElement : <NotFound />
  }
])

export default route
