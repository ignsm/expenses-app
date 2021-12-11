import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const expenses = props.expenses;

  if (expenses.length === 0) {
    return (
      <h3 className="expenses-list__fallback">
        Didn't find expenses with the given filter.
      </h3>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
