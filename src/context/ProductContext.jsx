import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);


  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return {
          ...product,
          ...updatedProduct,
        };
      }
      return product;
    });
  
    setProducts(updatedProducts);
    setEditingProductId(null);
  };
  

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        handleAddProduct,
        handleDeleteProduct,
        handleEditProduct,
        handleUpdateProduct,
        editingProductId,
        setEditingProductId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };
