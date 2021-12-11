import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShowingForm, setIsShowingForm] = useState(false);

  const toggleForm = () => {
    const result = isShowingForm ? false : true;
    setIsShowingForm(result);
  };

  const submitForm = (enteredExpenseData) =>
    props.onNewExpense(enteredExpenseData);

  return (
    <div className="new-expense">
      {isShowingForm || <button onClick={toggleForm}>Create expense</button>}
      {isShowingForm && <ExpenseForm onFormSubmit={submitForm} onCancel={toggleForm} />}
    </div>
  );
};

export default NewExpense;
