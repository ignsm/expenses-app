import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    const result = showForm ? false : true;
    setShowForm(result);
  };

  const submitForm = (enteredExpenseData) =>
    props.onNewExpense(enteredExpenseData);

  return (
    <div className="new-expense">
      {showForm || <button onClick={toggleForm}>Create expense</button>}
      {showForm && <ExpenseForm onFormSubmit={submitForm} onCancel={toggleForm} />}
    </div>
  );
};

export default NewExpense;
