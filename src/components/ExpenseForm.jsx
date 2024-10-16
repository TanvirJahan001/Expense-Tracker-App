import React, { useState } from "react";

const ExpenseForm = ({ addExpense, categories = [] }) => {
  // Default to an empty array if categories is undefined
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category && date) {
      addExpense({ description, amount, category, date });
      setDescription("");
      setAmount("");
      setCategory("");
      setDate("");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border rounded-lg shadow-sm w-full mb-4 focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          placeholder="Amount (৳)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 border rounded-lg shadow-sm w-full mb-4 focus:ring-2 focus:ring-green-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded-lg shadow-sm w-full mb-4 focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border rounded-lg shadow-sm w-full mb-4 focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
