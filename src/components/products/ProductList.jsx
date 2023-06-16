import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      <h1 className="text-center text-warning fw-bold mt-5">Ürün Listesi</h1>
      <div class="alert alert-danger mt-5 w-50 m-auto" role="alert">
        Ürünleri düzenleyebilmek için ürünün üzerine tıklayın!
      </div>
      <div className="product-list">
          <ProductItem  />
      </div>
    </div>
  );
};

export default ProductList;
