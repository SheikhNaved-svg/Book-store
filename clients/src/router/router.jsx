import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import Shop from "../pages/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/blog.jsx";
const router=createBrowserRouter([
    { path: '/',
     element: <App />,
     children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
            
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/about",
            element:<About/>
        },


     ]
    },
])

export default router;