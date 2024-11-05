import React from 'react';

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  setExpense,
  expenses,
  setEditingRowId,
  rowId,
}) {
  // Ensure menuPosition is defined and has the necessary properties
  if (!menuPosition || !menuPosition.left) return null;

  const expenseToEdit = expenses.find((expense) => expense.id === rowId);

  // Ensure that the expense exists before trying to access its properties
  if (!expenseToEdit) return null;

  const { title, category, amount } = expenseToEdit;

  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <button
        onClick={() => {
          setEditingRowId(rowId);
          setExpense({ title, category, amount });
          setMenuPosition({});
        }}
        aria-label={`Edit expense: ${title}`}
      >
        Edit
      </button>
      <button
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
        aria-label={`Delete expense: ${title}`}
      >
        Delete
      </button>
    </div>
  );
}