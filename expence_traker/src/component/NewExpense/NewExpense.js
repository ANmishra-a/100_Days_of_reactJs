import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = function () {
    setIsEditing(true);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e` + Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditing}>Add New Expense</button>
      )}
    </div>
  );
}
export default NewExpense;
