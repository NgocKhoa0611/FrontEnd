// CustomAlert.js
import React from 'react';
import './ProductDetails';

const CustomAlert = ({ message, onClose }) => (
  <div className="custom-alert-overlay">
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  </div>
);

export default CustomAlert;
