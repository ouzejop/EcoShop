import React, { useState } from "react";
import "./InputNumber.css"; // Importer le fichier CSS

function InputNumber({ value, onChange }) {
  const min = 0;
  const max = 10;

  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div style={{ display: "inline-flex" }}>
      <span className="input-number-decrement" onClick={decrement}>–</span>
      <input className="input-number" type="text" value={value} readOnly />
      <span className="input-number-increment" onClick={increment}>+</span>
    </div>
  );
}

export default InputNumber;
