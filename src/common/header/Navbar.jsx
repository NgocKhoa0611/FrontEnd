import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Nhớ import file CSS của bạn

const Navbar = () => {
  // State to manage the visibility of mobile menu and submenus
  const [MobileMenu, setMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track which submenu is open

  // Toggle submenu
  const toggleSubMenu = (menuIndex) => {
    if (activeSubMenu === menuIndex) {
      setActiveSubMenu(null); // Close submenu if it's already open
    } else {
      setActiveSubMenu(menuIndex); // Open selected submenu
    }
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/products" onClick={() => toggleSubMenu(1)}>
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => toggleSubMenu(2)}>
                  Áo
                </Link>
                {activeSubMenu === 2 && (
                  <ul className="submenu">
                    <li><Link to="/sanpham/ao">Áo thun</Link></li>
                    <li><Link to="/sanpham/somi">Áo sơ mi</Link></li>
                    <li><Link to="/sanpham/aokhoac">Áo khoác</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/" onClick={() => toggleSubMenu(3)}>
                  Quần
                </Link>
                {activeSubMenu === 3 && (
                  <ul className="submenu">
                    <li><Link to="/sanpham/quantay">Quần tây</Link></li>
                    <li><Link to="/sanpham/quandui">Quần đùi</Link></li>
                    <li><Link to="/sanpham/quanjean">Quần jean</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/" onClick={() => toggleSubMenu(4)}>
                  Phụ kiện
                </Link>
                {activeSubMenu === 4 && (
                  <ul className="submenu">
                    <li><Link to="/sanpham/non">Nón</Link></li>
                    <li><Link to="/sanpham/dongho">Đồng hồ</Link></li>
                    <li><Link to="/sanpham/tuibalo">Túi sách/Balo</Link></li>
                    </ul>
                )}
              </li>
              <li>
                <Link to="/" onClick={() => toggleSubMenu(4)}>
                  Giày
                </Link>
                {activeSubMenu === 4 && (
                  <ul className="submenu">
                    <li><Link to="/sanpham/ao">Thể thao</Link></li>
                    <li><Link to="/sanpham/quan">Giày tây</Link></li>
                    <li><Link to="/sanpham/phukien">Cao gót</Link></li>
                    </ul>
                )}
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
              <li>
                <Link to="#">Đơn Hàng</Link>
              </li>
            </ul>

            {/* Toggle button for mobile menu */}
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