import React, { useEffect, useState, useRef } from "react";
import logo from "../../components/assets/images/logo1.png";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = ({ CartItem }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fixed Header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      if (search) {
        search.classList.toggle("active", window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="Company Logo" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Tìm kiếm sản phẩm tại đây.." />
          </div>

          <div className="icon f_flex width">
            {/* User Icon - Dropdown */}
            <div
              className={`user-icon ${isDropdownOpen ? "active" : ""}`}
              ref={dropdownRef}
            >
              <i
                className="fa fa-user icon-circle"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              ></i>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/UserInfo">Tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/Login">Đăng nhập</Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      onClick={() => {
                        // Handle logout here
                        console.log("Đăng xuất");
                      }}
                    >
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cart Link */}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
