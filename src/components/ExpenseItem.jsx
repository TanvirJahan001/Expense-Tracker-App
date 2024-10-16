// src/components/ExpenseItem.js
import React from "react";

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <div>
        <p className="font-medium">{expense.description}</p>
        <small className="text-gray-500">{expense.category}</small>
      </div>
      <div className="mt-2 sm:mt-0">
        <span className="text-red-500">${expense.amount}</span>
        <button onClick={editExpense} className="ml-4 text-blue-500">
          Edit
        </button>
        <button onClick={deleteExpense} className="ml-2 text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
