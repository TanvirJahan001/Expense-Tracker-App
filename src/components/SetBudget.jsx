const SetBudget = ({ budget, setBudget, resetBudget }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Set Your Monthly Budget
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <input
          type="number"
          className="p-3 border rounded-lg w-1/2 text-gray-700 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
        />
        <button
          onClick={() => setBudget(0)}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
        >
          Reset Budget
        </button>
      </div>
      <div className="mt-4 text-center text-gray-600">
        <p className="text-xl">Total Budget: ৳{budget.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SetBudget;
