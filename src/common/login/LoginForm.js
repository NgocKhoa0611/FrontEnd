import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './LoginForm.css';

const LoginForm = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate(); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (action === "Sign Up") {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        setMessage(""); 
        return;
      }
      setError(""); 
      setMessage("Account created successfully!"); 
      console.log("Account created with details:", formData);
     
    } else if (action === "Login") {
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields!");
        setMessage(""); 
        return;
      }
      setError(""); 
      setMessage("Login successful!");
      console.log("Login with email:", formData.email);

      // Simulate successful login
      setTimeout(() => {
        // Lưu thông tin người dùng vào localStorage
        const user = { username: formData.username || "User", email: formData.email }; // Lưu thông tin người dùng
        localStorage.setItem('user', JSON.stringify(user));

        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="container1">
      <div className="header1">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <>
            <div className="input">
              <i className="material-icons"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <i className="material-icons"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <i className="material-icons"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <i className="material-icons"></i>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
        {action === "Login" && (
          <>
            <div className="input">
              <i className="material-icons"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <i className="material-icons"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}
      <div className="forgot-password">Mất mật khẩu?<span>Bấm vào đây!</span></div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          {action}
        </div>
      </div>
      <div className="switch-mode">
        {action === "Sign Up" ? (
          <span onClick={() => setAction("Login")}>Bạn đã có tài khoản? Đăng nhập tại đây.</span>
        ) : (
          <span onClick={() => setAction("Sign Up")}>Bạn chưa có tài khoản? Đăng ký tại đây.</span>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
