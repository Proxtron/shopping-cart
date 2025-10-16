import { createBrowserRouter } from 'react-router'
import App from './App';
import HomePage from './feature/home/HomePage';
import CatalogPage from './feature/catalog/CatalogPage';
import CartPage from "./feature/cart/CartPage";
import ErrorPage from './ErrorPage';
import CatalogItemPage from './feature/catalog/CatalogItemPage';

const routes = [
  { 
    path: "/", 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "catalog", element: <CatalogPage/> },
      { path: "catalog/:catalogItemId", element: <CatalogItemPage/> },
      { path: "cart", element: <CartPage/>}
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
export {routes};