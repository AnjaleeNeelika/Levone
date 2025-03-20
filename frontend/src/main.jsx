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
import AddToCart from './assets/pages/Cart/AddToCart';
import ResetPassword from './assets/pages/ResetPassword.jsx/ResetPassword';
import OAuth2LoginCallback from './assets/pages/OAuth2LoginCallback';
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
            {
                path: '/add-to-cart',
                element: <AddToCart />
            }
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
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            }
        ]
    },
    {
        path: '/oauth2/callback',
        element: <OAuth2LoginCallback />
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
