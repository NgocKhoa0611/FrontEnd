// AllProducts.js
import React from "react";
import "./products.css"; // Nhớ tạo file CSS nếu cần

const AllProducts = () => {
  // Dữ liệu sản phẩm tĩnh
  const products = [
    {
      id: 1,
      name: "Áo thun",
      price: 200000,
      cover: "./images/products/aopolo11.1.jpg", // Thay thế bằng đường dẫn ảnh thực
    },
    {
      id: 2,
      name: "Áo sơ mi",
      price: 250000,
      cover: "./images/products/quanjean11.1.jpg",
    },
    {
      id: 3,
      name: "Quần tây",
      price: 300000,
      cover: "./images/products/balo9.1.jpg",
    },
    {
      id: 4,
      name: "Quần đùi",
      price: 150000,
      cover: "./images/products/aopolo2.2.jpg",
    },
    {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "./images/products/balo3.1.jpg",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "./images/products/balo4.1.jpg",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "./images/products/balo9.2.jpg",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "./images/products/balo10.1.jpg",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Quần đùi",
        price: 150000,
        cover: "https://via.placeholder.com/150",
      },

    // Thêm các sản phẩm khác ở đây...
  ];

  return (
    <div className="all-products">
      <h1>Tất cả sản phẩm</h1>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.cover} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} đ</p>
            <button>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
