import React, { useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductForm.css";
import ProductImg from '../../assets/product-form.svg'
import { IoMdAddCircle } from 'react-icons/io'

const ProductForm = () => {
  const { handleAddProduct } = useProductContext();

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductStock, setNewProductStock] = useState("");
  const [newProductImage, setNewProductImage] = useState("");

  const handleProductNameChange = (event) => {
    setNewProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setNewProductPrice(event.target.value);
  };

  const handleProductStockChange = (event) => {
    setNewProductStock(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setNewProductImage(event.target.value);
  };

  const handleAddButtonClick = () => {
    const newProduct = {
      id: Date.now(),
      name: newProductName.trim(),
      price: parseFloat(newProductPrice),
      stock: parseInt(newProductStock),
      image: newProductImage,
    };

    handleAddProduct(newProduct);

    setNewProductName("");
    setNewProductPrice("");
    setNewProductStock("");
    setNewProductImage("");
  };

  return (
    <div className="container">
      <h2 className="text-center text-warning fw-bold fs-1 mb-5">ÜRÜN EKLEME</h2>
      <div className="form">
        <div className="text-center">
          <img className=" w-50" src={ProductImg} alt="" />
        </div>
        <fieldset className="form-group d-flex flex-column gap-2 mb-1">
          <label className="" htmlFor="urun-adi">Ürün Adı</label>
            <input
              id="urun-adi"
              type="text"
              value={newProductName}
              onChange={handleProductNameChange}
              placeholder="Ürün Adı"
            />
          <label htmlFor="urun-adi">Ürün Fiyatı</label>
          <input
            type="number"
            value={newProductPrice}
            onChange={handleProductPriceChange}
            placeholder="Ürün Fiyatı"
          />
          <label htmlFor="urun-adi">Stok Miktarı</label>
          <input
            type="number"
            value={newProductStock}
            onChange={handleProductStockChange}
            placeholder="Stok Miktarı"
          />
          <label htmlFor="urun-adi">Resim</label>
          <input
            type="text"
            value={newProductImage}
            onChange={handleProductImageChange}
            placeholder="Resim URL"
          />
           <div className="mt-3">
          <Link
            className="btn btn-outline-success d-block"
            to="/product-list"
            onClick={handleAddButtonClick}
          >
            <IoMdAddCircle className="text-success"/>Ürün Ekle
          </Link>
        </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ProductForm;
