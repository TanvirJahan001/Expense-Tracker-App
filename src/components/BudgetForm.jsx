// src/components/BudgetForm.js
import React, { useState } from "react";

const BudgetForm = ({ setBudget }) => {
  const [inputBudget, setInputBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedBudget = parseFloat(inputBudget); // Ensure it's parsed as a float
    if (parsedBudget > 0) {
      setBudget(parsedBudget);
      localStorage.setItem("budget", parsedBudget); // Store as a number
    } else {
      alert("Please enter a valid budget.");
    }
  };

  const handleReset = () => {
    setBudget(0); // Reset the budget to 0
    localStorage.removeItem("budget"); // Remove from localStorage
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Set Your Monthly Budget
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
          placeholder="Enter Budget"
          className="p-3 border rounded-lg shadow-sm w-full mb-4 focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition"
        >
          Set Budget
        </button>
      </form>
      <button
        onClick={handleReset}
        className="bg-red-500 text-white p-3 rounded-lg w-full mt-4 hover:bg-red-600 transition"
      >
        Reset Budget
      </button>
    </div>
  );
};

export default BudgetForm;
