import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Nhớ import file CSS của bạn

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="navlink">
            <ul
              className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/sanpham">Sản phẩm</Link>
                <ul className="submenu">
                  <li><Link to="/sanpham/ao">Áo</Link></li>
                  <li><Link to="/sanpham/quan">Quần</Link></li>
                  <li><Link to="/sanpham/phukien">Phụ kiện</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/ao">Áo</Link>
                <ul className="submenu">
                  <li><Link to="/sanpham/ao">Áo thun </Link></li>
                  <li><Link to="/sanpham/quan">Áo sơ mi</Link></li>
                  <li><Link to="/sanpham/phukien">Áo khoác</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/quan">Quần</Link>
                <ul className="submenu">
                  <li><Link to="/sanpham/ao">Quần tây</Link></li>
                  <li><Link to="/sanpham/quan">Quần đùi</Link></li>
                  <li><Link to="/sanpham/phukien">Quần jean</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/phukien">Phụ kiện</Link>
                <ul className="submenu">
                  <li><Link to="/sanpham/ao">Nón</Link></li>
                  <li><Link to="/sanpham/quan">Đồng hồ</Link></li>
                  <li><Link to="/sanpham/phukien">Túi sách/ Balo</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Về chúng tôi</Link>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
