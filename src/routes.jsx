import { createBrowserRouter } from 'react-router'
import App from './App';
import HomePage from './feature/home/HomePage';
import CatalogPage from './feature/catalog/CatalogPage';
import CartPage from "./feature/cart/CartPage";
import ErrorPage from './ErrorPage';

const routes = [
  { 
    path: "/", 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "catalog", element: <CatalogPage/>},
      { path: "cart", element: <CartPage/>}
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
export {routes};