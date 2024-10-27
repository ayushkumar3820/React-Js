import React, { useState } from 'react';

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const errorData = {};

    if (!formData.title) {
      errorData.title = 'Title is required';
    }
    if (!formData.category) {
      errorData.category = 'Category is required';
    }
    if (!formData.amount) {
      errorData.amount = 'Amount is required';
    }

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validate(expense);
    if (Object.keys(validationResult).length) return; // Stop if there are validation errors

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: '',
      category: '',
      amount: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Correct destructuring from e.target

    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error for the field being updated
    }));
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={expense.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error">{errors.title}</p>} {/* Display validation error */}
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
          {errors.category && <p className="error">{errors.category}</p>} {/* Display validation error */}
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
          {errors.amount && <p className="error">{errors.amount}</p>} {/* Display validation error */}
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}
