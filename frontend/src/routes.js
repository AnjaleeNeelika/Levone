import { createBrowserRouter } from "react-router-dom";
import ProductList from "./assets/pages/ProductListPage/ProductList";
import Shop from "./Shop.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Shop />,
    },
    {
        path: "/women",
        element: <ProductList />,
    }
]);
