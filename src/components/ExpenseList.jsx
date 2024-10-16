import React from "react";

const ExpenseList = ({
  expenses,
  deleteExpense,
  categories,
  filterByCategory,
  filterByDate,
  selectedCategory,
  selectedDate,
}) => {
  const filteredExpenses = expenses.filter((expense) => {
    const categoryMatch = selectedCategory
      ? expense.category === selectedCategory
      : true;
    const dateMatch = selectedDate ? expense.date === selectedDate : true;
    return categoryMatch && dateMatch;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Expense List
      </h2>

      {/* Filter Section */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex-1 w-full">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            onChange={(e) => filterByCategory(e.target.value)} // Update category filter in App.js
            value={selectedCategory}
            className="p-3 w-full border rounded-lg"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 w-full">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => filterByDate(e.target.value)} // Update date filter in App.js
            className="p-3 w-full border rounded-lg"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-gray-800">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3 px-4 text-sm font-medium">Description</th>
              <th className="py-3 px-4 text-sm font-medium">Amount</th>
              <th className="py-3 px-4 text-sm font-medium">Category</th>
              <th className="py-3 px-4 text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{expense.description}</td>
                <td className="py-3 px-4">৳{expense.amount}</td>
                <td className="py-3 px-4">{expense.category}</td>
                <td className="py-3 px-4">{expense.date}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
