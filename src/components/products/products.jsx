// AllProducts.js
import React, { useEffect, useState } from "react";
import "./products.css"; // Nhớ tạo file CSS nếu cần

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div className="all-products">
      <h1>Tất cả sản phẩm</h1>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.product_id}>
            <img src={`http://localhost:8000/img/${product.detail.productImage.img_url}`} className="img-fluid" />
            <h3>{product.product_name}</h3>
            <p>{product.price} đ</p>
            <button>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
