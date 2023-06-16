// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import ProductForm from "./components/products/ProductForm";
import Root from "./components//root/Root";
import CategoryManagement from "./components/category/CategoryManagement";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <CategoryManagement />,
        },
        {
          path: "/product-list",
          element: <ProductList />,
        },
        {
          path: "/product-form",
          element: <ProductForm />,
        },
      ],
    },
  ]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
