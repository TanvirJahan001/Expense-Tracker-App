// src/components/ExpenseAnalysis.js
import React from "react";

const ExpenseAnalysis = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const mostExpensiveCategory = categories.reduce(
    (maxCategory, category) => {
      const categorySum = expenses
        .filter((expense) => expense.category === category)
        .reduce((sum, expense) => sum + expense.amount, 0);
      return categorySum > maxCategory.amount
        ? { category, amount: categorySum }
        : maxCategory;
    },
    { category: "", amount: 0 }
  );

  const highestSingleExpense = expenses.reduce(
    (maxExpense, expense) => {
      return expense.amount > maxExpense.amount ? expense : maxExpense;
    },
    { description: "", amount: 0 }
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Expense Insights
      </h2>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="text-gray-700">Total Expenses:</span>
          <span className="font-bold text-gray-900">
            ${totalExpenses.toFixed(2)}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-700">Most Expensive Category:</span>
          <span className="font-bold text-gray-900">
            {mostExpensiveCategory.category} ($
            {mostExpensiveCategory.amount.toFixed(2)})
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-700">Highest Single Expense:</span>
          <span className="font-bold text-gray-900">
            {highestSingleExpense.description} ($
            {highestSingleExpense.amount.toFixed(2)})
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ExpenseAnalysis;
