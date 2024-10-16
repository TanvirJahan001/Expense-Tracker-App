// src/components/Balance.js
import React from "react";

const Balance = ({ total }) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-2xl">Total Expenses</h2>
      <p className="text-xl">${total}</p>
    </div>
  );
};

export default Balance;
