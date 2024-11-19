import { createBrowserRouter } from "react-router-dom";
import ProductList from "./assets/pages/ProductListPage/ProductList";
import Shop from "./Shop.jsx";
import Wrapper from "./assets/pages/Wrapper.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        children: [
            {
                path: "/",
                element: <Shop />
            },
            {
                path: "/women",
                element: <ProductList />,
            },
        ]
    },
    
]);
