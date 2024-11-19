import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Shop from './Shop';
import ProductList from './assets/pages/ProductListPage/ProductList';
import NavigationBar from './assets/components/Navigation/NavigationBar';
// import { router } from './routes.js'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Shop />,
    },
    {
        path: "/women",
        element: <ProductList />,
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        {/* <NavigationBar /> */}
        <Shop />
    </RouterProvider>
  </StrictMode>,
)
