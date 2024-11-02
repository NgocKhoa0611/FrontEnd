import React, { useState } from "react";
import './UserInfo.css';

function UserInfo() {
  const initialUser = JSON.parse(localStorage.getItem("user")) || { username: "", phone: "", email: "", image: "", address: "" };
  const [user, setUser] = useState(initialUser);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    setMessage("Thông tin đã được cập nhật thành công!");
  };

  return (
    <div className="user-info-container">
      <h1>Thông tin của bạn</h1>
      {message && <div className="success-message">{message}</div>}

      <form onSubmit={handleSubmit} className="user-info-form">
        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text 1"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text 1"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email 1"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Địa chỉ:</label>
          <input
            type="text 1"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hình ảnh:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {user.image && <img src={user.image} alt="User" className="user-image" />}
        <button type="submit">Cập nhật thông tin</button>
      </form>
    </div>
  );
}

export default UserInfo;
