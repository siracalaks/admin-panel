import React, { useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import "./ProductItem.css";
import { AiFillDelete } from 'react-icons/ai';

const ProductItem = () => {
  const {
    handleDeleteProduct,
    handleEditProduct,
    setEditingProductId,
    handleUpdateProduct,
    editingProductId,
    products,
  } = useProductContext();

  const [editingProductName, setEditingProductName] = useState("");
  const [editingProductPrice, setEditingProductPrice] = useState("");
  const [editingProductStock, setEditingProductStock] = useState("");
  const [editingProductImage, setEditingProductImage] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);

  const handleEditProducts = (product) => {
    setShowUpdate(true);
    handleEditProduct(product);
    setEditingProductId(product.id);
    setEditingProductName(product.name);
    setEditingProductPrice(product.price.toString());
    setEditingProductStock(product.stock.toString());
    setEditingProductImage(product.image);
  };

  const handleUpdateProducts = () => {
    handleUpdateProduct({
      id: editingProductId,
      name: editingProductName.trim(),
      price: parseFloat(editingProductPrice),
      stock: parseInt(editingProductStock),
      image: editingProductImage,
    });

    setEditingProductId(null);
    setEditingProductName("");
    setEditingProductPrice("");
    setEditingProductStock("");
    setEditingProductImage("");
    setShowUpdate(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th className="col">#</th>
                  <th className="col">Sil</th>
                  <th className="col">Ürün Adı</th>
                  <th className="col">Ürün Fiyatı</th>
                  <th className="col">Stok Miktarı</th>
                  <th className="col">Resim</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  showUpdate && editingProductId === product.id ? (
                    <tr key={product.id}>
                      <td className="col">{ index + 1 }</td>
                      <td>
                        <input
                          type="text"
                          value={editingProductName}
                          onChange={(e) => setEditingProductName(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={editingProductPrice}
                          onChange={(e) => setEditingProductPrice(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={editingProductStock}
                          onChange={(e) => setEditingProductStock(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={editingProductImage}
                          onChange={(e) => setEditingProductImage(e.target.value)}
                        />
                      </td>
                      <td>
                        <button className="btn btn-outline-dark" onClick={handleUpdateProducts}>Güncelle</button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={product.id} onClick={() => handleEditProducts(product)}>
                      <td className="col">{ index + 1 }</td>
                      <td>
                        <AiFillDelete className="text-danger" onClick={() => handleDeleteProduct(product.id)} />
                      </td>
                      <td className="col">{product.name}</td>
                      <td className="col">${product.price}</td>
                      <td className="col">{product.stock}</td>
                      <td className="col">{product.image}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
