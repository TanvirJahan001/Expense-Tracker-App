# Expense Tracker App

## 1. Overview

The **Expense Tracker App** is a React-based application designed to help users manage and track their expenses efficiently. It features a clean, responsive design using Tailwind CSS, providing users with a modern interface to add, view, filter, and analyze their expenses. The app includes a budgeting feature that allows users to set a monthly budget and visually track their savings and expenses using a pie chart.

## Screenshots

### Expense Tracker App

![Expense Tracker Screenshot](screenshoot.png)

## 2. Technologies Used

- **Frontend:** React, JavaScript, Tailwind CSS
- **State Management:** React `useState`, `useEffect` hooks
- **Data Visualization:** `react-chartjs-2` for charts
- **Icons:** `react-icons` for icons
- **Local Storage:** For data persistence between sessions

## 3. Core Features

### 3.1 Budget Management

Users can set a monthly budget and reset it. The budget is stored in localStorage and is reflected in the pie chart, where expenses are compared against the budget.

### 3.2 Expense Tracking

Users can add new expenses by entering the description, amount, category, and date. The app tracks and displays all expenses in a responsive table format. Users can also delete expenses.

### 3.3 Expense Categories

The app provides pre-defined categories: Food, Transport, Entertainment, Bills, Health, and Others. These categories are used for both adding expenses and filtering them.

### 3.4 Expense Filters

Users can filter expenses by:

- **Category**: Select any category from the dropdown to filter expenses.
- **Date**: Select a specific date to filter expenses by the date they were added.

### 3.5 Responsive Design

The app is designed to be fully responsive, ensuring that it looks great and is usable on mobile, tablet, and desktop screens.

### 3.6 Data Visualization

A pie chart displays the comparison between total expenses and total savings. The chart updates dynamically based on the current expenses and budget.

### 3.7 Persistence with Local Storage

- **Expenses**: All expenses added are stored in localStorage, ensuring that they persist even after the browser is refreshed.
- **Budget**: The budget is also stored in localStorage and remains persistent across sessions.

## 4. Components

### 4.1 App.js

This is the main component that integrates all other components and manages the state for expenses and budget. It handles:

- Passing the budget and expense data between components.
- Filtering expenses by category and date.
- Storing and retrieving data from localStorage.

### 4.2 BudgetForm.js

Allows users to set or reset the budget.

```jsx
// Props:
setBudget: A function to update the budget in the parent component.
```

### 4.3 ExpenseForm.js

A form where users can input details for a new expense (description, amount, category, date).

```jsx
// Props:
addExpense: A function to add a new expense to the expense list.
```

### 4.4 ExpenseList.js

Displays the list of expenses in a responsive table format. Includes a filter section for filtering expenses by category and date.

```jsx
// Props:
expenses: List of filtered expenses.
deleteExpense: Function to remove an expense.
categories: List of categories for filtering.
filterByCategory: Function to filter expenses by category.
filterByDate: Function to filter expenses by date.
selectedCategory and selectedDate: Current filter values.
```

### 4.5 PieChart.js

Renders a pie chart that compares total expenses and total savings against the set budget.

```jsx
// Props:
expenses: List of expenses.
budget: The current budget.
```

## 5. State Management

The app uses React hooks (`useState`, `useEffect`) for state management:

- **`expenses`**: Tracks the list of expenses. Stored in localStorage to persist data between sessions.
- **`budget`**: Tracks the user's budget. Stored in localStorage.
- **`selectedCategory` and `selectedDate`**: Used for filtering the displayed expenses.

## 6. User Interface

The app uses Tailwind CSS for styling, giving it a modern, responsive look. Key design components include:

- **Gradient Background**: A visually appealing background for the app.
- **Card Layout**: Sections like the Budget Form, Expense List, and Pie Chart are displayed in card-like containers with shadows for a modern feel.
- **Icons**: Utilizes `react-icons` for representing budget and savings in the UI.

### 6.1 Responsiveness

The app adjusts its layout for different screen sizes:

- **Mobile**: The expense table becomes scrollable horizontally to ensure visibility.
- **Tablet/Desktop**: The full table is visible without horizontal scrolling.

## 7. Local Storage

The app uses localStorage to persist:

- **Expenses**: Stored as an array of expense objects.
- **Budget**: Stored as a number.

## 8. How to Run the App

### Prerequisites:

- Node.js
- React

### Steps to Run:

1. Clone the repository:
   ```bash
   git clone https://github.com/TanvirJahan001/Expense-Tracker-App.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 9. Future Enhancements

- **Expense Editing**: Add functionality to edit an existing expense.
- **Detailed Analysis**: Provide more insights such as average daily spend, highest and lowest single expenses.
- **Notifications**: Alerts for overspending or nearing the budget limit.
