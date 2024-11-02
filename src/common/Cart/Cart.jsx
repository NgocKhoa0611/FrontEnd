import React from "react";
import "./style.css";


const Cart = ({ CartItem, addToCart, decreaseQty, removeItem }) => { 
   // Thêm removeItem vào props
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);
 

  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          {/* Nếu không có item trong giỏ hàng thì hiển thị thông báo và nút liên kết tới trang chủ */}
          <div className="cart-details">
            {CartItem.length === 0 && (
              <>
                <h1 className="no-items product">Không có sản phẩm nào trong giỏ hàng</h1>
                <a href="/" className="home-link">
                  <button className="go-home-btn">Quay về trang chủ</button>
                </a>
              </>
            )}

            {/* Hiển thị các sản phẩm trong giỏ hàng */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart" onClick={() => removeItem(item.id)}> {/* Gọi hàm xóa với id sản phẩm */}
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* Tăng hoặc giảm số lượng sản phẩm */}
                    <div className="cartControl d_flex">
                      <button className="incCart" onClick={() => addToCart(item)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button className="desCart" onClick={() => decreaseQty(item)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          {/* Phần tổng giá và nút thanh toán chỉ hiển thị khi có sản phẩm trong giỏ hàng */}
          {CartItem.length > 0 && (
            <div className="cart-total product">
              <h2>Tổng Thanh toán </h2>
              <div className="d_flex">
                <h4>Thành tiền  :</h4>
                <h3>${totalPrice}.00</h3>
                <button className="checkout-btn" onClick={() => alert("Proceeding to checkout!")}>
              Đặt hàng
            </button>
              </div>
             
            </div>
            
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;