import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Begining from "../components/Beginner/Begining";




export const router = createBrowserRouter([

    {
        path:"/",
        element:<Layout />,
        children:[
            {index: true, element:<Begining /> },
        ]
    }


])