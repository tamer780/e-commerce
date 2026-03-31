import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductCard from "./features/products/ProductCard.jsx";
import ProductDetails from "./features/products/ProductDetails.jsx";
import CategoryPage from "./features/categories/CategoryPage.jsx";
import CategoryCard from "./features/categories/CategoryCard.jsx";
import Electronics from "./pages/Electronics.jsx";
import Fashion from "./pages/Fashion.jsx";
import Clothes from "./pages/Clothes.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import Checkout from "./features/checkout/Checkout.jsx";
import ProtectedRoute from "./features/auth/ProtectedRoute.jsx";
import Cart from "./features/cart/Cart.jsx";
import Wishlist from "./features/wishlist/wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "product", element: <ProductCard /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "category", element: <CategoryCard /> },
      { path: "category/:categorySlug", element: <CategoryPage /> },
      { path: "clothes", element: <Clothes /> },
      { path: "electronics", element: <Electronics /> },
      { path: "fashion", element: <Fashion /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: "checkout", element: <Checkout /> }],
      },
    ],
  },
]);

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
