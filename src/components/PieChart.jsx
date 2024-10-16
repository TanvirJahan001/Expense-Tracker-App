import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import { FaMoneyBillAlt, FaRegSave } from "react-icons/fa"; // Money and Save Icons

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses, budget }) => {
  // Ensure total expenses are a valid number
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount || 0), // Guard against non-numeric expense amounts
    0
  );

  // Ensure budget is a valid number, default to 0 if invalid
  const totalBudget = isNaN(parseFloat(budget)) ? 0 : parseFloat(budget);

  const totalSavings = totalBudget - totalExpenses;

  const data = {
    labels: ["Expenses", "Savings"],
    datasets: [
      {
        data: [totalExpenses, totalSavings],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Expense vs. Savings
      </h2>
      <Pie data={data} />
      <div className="mt-6 text-center space-y-3">
        <div className="flex justify-center items-center space-x-2">
          <FaMoneyBillAlt className="text-2xl text-green-500" />
          <p className="text-lg font-semibold">
            Total Budget: ৳{totalBudget.toFixed(2) || "No Budget Set"}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <FaRegSave className="text-2xl text-purple-500" />
          <p className="text-lg font-semibold">
            Total Expenses: ৳{totalExpenses.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <FaRegSave className="text-2xl text-blue-500" />
          <p className="text-lg font-semibold">
            Total Savings: ৳{totalSavings.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
