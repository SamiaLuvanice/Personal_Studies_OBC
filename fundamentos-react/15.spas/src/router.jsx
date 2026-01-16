import { createBrowserRouter } from "react-router-dom";
import ProductBoundary from "./error-boundaries/ProductBoundary";
import loadProduct from "./loaders/products";
import AdminHome from "./pages/admin/AdminHome";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />,
    }, {
      path: "products",
      element: <Products />,
    }, {
      path: "products/:productId",
      element: <Product />,
      loader: loadProduct,
      errorElement: <ProductBoundary />,
    }, {
      path: "cart",
      element: <Cart />,
    }],
  },
  {
    path: "admin",
    element: <AdminHome />,
  },
])

export default router;
