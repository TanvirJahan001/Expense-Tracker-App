import React from "react";

const ExpenseFilter = ({
  selectedCategory,
  selectedDate,
  setSelectedCategory,
  setSelectedDate,
  categories,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="category"
        className="block text-lg font-medium text-gray-700"
      >
        Category
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 border rounded-md mt-2"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label
        htmlFor="date"
        className="block text-lg font-medium text-gray-700 mt-4"
      >
        Date
      </label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="w-full p-2 border rounded-md mt-2"
      />
    </div>
  );
};

export default ExpenseFilter;
