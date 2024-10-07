import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Shop from "../../pages/Shop";
import Contact from "../../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])

export default router