import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import AllProducts from "./components/products/products"; 
import ProductDetails from "./components/productDetails/ProductDetails";
import Checkout from "./components/checkout/Checkout";
import Login from "./common/login/LoginForm";
import UserInfo from "./common/user/UserInfo";


function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes> {/* Updated Switch to Routes */}
          <Route path="/"element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}/>
          <Route path="/cart"element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>
          <Route path="/products" element={<AllProducts />} /> {/* Thêm route cho AllProducts */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout CartItem={CartItem} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userinfo" element={<UserInfo />} /> {/* Thêm route cho UserInfo */}
        </Routes>
        <Footer />
      </Router>
    </>   
  );
}

export default App;
