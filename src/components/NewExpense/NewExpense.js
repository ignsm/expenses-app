import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const submitForm = (enteredExpenseData) =>
    props.onNewExpense(enteredExpenseData);

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={submitForm} />
    </div>
  );
};

export default NewExpense;
