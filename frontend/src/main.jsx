import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Shop from './Shop';
import ProductList from './assets/pages/ProductListPage/ProductList';
import Wrapper from './assets/pages/Wrapper';
import ProductDetails from './assets/pages/ProductDetailPage/ProductDetails';
import loadProductById from './routes/products';
import { Provider } from 'react-redux';
import store from './assets/store/store';
// import { router } from './routes.js'


const router = createBrowserRouter([
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
                element: <ProductList categoryType={'WOMEN'} />,
            },
            {
                path: "/men",
                element: <ProductList categoryType={'MEN'} />,
            },
            {
                path: "/kids",
                element: <ProductList categoryType={'KIDS'} />,
            },
            {
                path: "/product/:productId",
                loader: loadProductById,
                element: <ProductDetails />
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                {/* <NavigationBar /> */}
                <Wrapper />
            </RouterProvider>
        </Provider>
    // </StrictMode>,
)
