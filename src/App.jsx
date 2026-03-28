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
    ],
  },
]);

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
