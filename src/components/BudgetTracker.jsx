// src/components/BudgetTracker.js
import React, { useState } from "react";

const BudgetTracker = ({ expenses }) => {
  const [budgets, setBudgets] = useState({
    Food: 500,
    Rent: 1000,
    Utilities: 200,
    Entertainment: 150,
    Other: 100,
  });

  const totalSpent = (category) =>
    expenses
      .filter((exp) => exp.category === category)
      .reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="mt-8">
      {Object.keys(setBudgets).map((category) => {
        const spent = totalSpent(category);
        const percentage = (spent / budgets[category]) * 100;
        const isOverspent = spent > budgets[category];

        return (
          <div key={category} className="mb-4">
            <h4>{category}</h4>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${
                  isOverspent ? "bg-red-500" : "bg-green-500"
                }`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
            {isOverspent && <p className="text-red-500">Overspent!</p>}
          </div>
        );
      })}
    </div>
  );
};

export default BudgetTracker;
