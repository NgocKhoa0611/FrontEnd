import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Nhớ import file CSS của bạn
import axios from "axios";

const Navbar = () => {
  // State to manage the visibility of mobile menu and submenus
  const [MobileMenu, setMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track which submenu is open
  const [Category1, setCategory1] = useState([]);
  const [Category2, setCategory2] = useState([]);
  const [Category3, setCategory3] = useState([]);
  const [Category4, setCategory4] = useState([]);

  // Toggle submenu
  const toggleSubMenu = (menuIndex) => {
    if (activeSubMenu === menuIndex) {
      setActiveSubMenu(null); // Close submenu if it's already open
    } else {
      setActiveSubMenu(menuIndex); // Open selected submenu
    }
  };
  const fetchCategory = async (categoryId, setState) => {
    try {
      const response = await axios.get(`http://localhost:8000/category/${categoryId}`);
      console.log(`Dữ liệu danh mục ${categoryId}:`, response.data);
      setState(response.data);
    } catch (error) {
      console.error(`Lỗi khi lấy danh mục ${categoryId}:`, error);
    }
  };

  useEffect(() => {
    fetchCategory(1, setCategory1); // Lấy danh mục Áo
    fetchCategory(2, setCategory2); // Lấy danh mục Quần
    fetchCategory(3, setCategory3); // Lấy danh mục Phụ kiện
    fetchCategory(4, setCategory4); // Lấy danh mục Giày
  }, []);

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
                    {Category1.map((item) => (
                      <li><Link to={""}>{item.category_name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/" onClick={() => toggleSubMenu(3)}>
                  Quần
                </Link>
                {activeSubMenu === 3 && (
                  <ul className="submenu">
                    {Category2.map((item) => (
                      <li><Link to={""}>{item.category_name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/" onClick={() => toggleSubMenu(4)}>
                  Phụ kiện
                </Link>
                {activeSubMenu === 4 && (
                  <ul className="submenu">
                    {Category3.map((item) => (
                      <li><Link to={""}>{item.category_name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/" onClick={() => toggleSubMenu(4)}>
                  Giày
                </Link>
                {activeSubMenu === 4 && (
                  <ul className="submenu">
                    {Category4.map((item) => (
                      <li><Link to={""}>{item.category_name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="#">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
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