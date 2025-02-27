import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Shop from './Shop';
import ProductList from './assets/pages/ProductListPage/ProductList';
import Wrapper from './assets/pages/Wrapper';
import AuthenticationWrapper from './assets/pages/AuthenticationWrapper';
import ProductDetails from './assets/pages/ProductDetailPage/ProductDetails';
import { Provider } from 'react-redux';
import store from './assets/store/store';
import loadProductBySlug from './routes/products';
import Login from './assets/pages/Login/Login';
import Signup from './assets/pages/Signup/Signup';
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
                path: "/product/:slug",
                loader: loadProductBySlug,
                element: <ProductDetails />
            },
        ]
    },
    {
        path: "/v1/",
        element: <AuthenticationWrapper />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            }
        ]
    }
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
