import { createBrowserRouter } from 'react-router'
import App from './App';
import HomePage from './feature/home/HomePage';
import CatalogPage from './feature/catalog/CatalogPage';
import CartPage from "./feature/cart/CartPage";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "catalog", element: <CatalogPage/>},
      { path: "cart", element: <CartPage/>}
    ]
  }
]);

export default router;