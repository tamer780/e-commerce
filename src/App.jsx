import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
