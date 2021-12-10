import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesList(props) {
  const expenses = props.expenses;
  const [filterByYear, setFilterByYear] = useState("any");

  const filterChangeHandler = (year) => {
    setFilterByYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filterByYear === "any") return expense;
    return expense.date.getFullYear().toString() === filterByYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterByYear}
        onChangeYearFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 && (
        <div class="expenses__filter-error">
          Didn't find expenses with the given filter.
        </div>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
    </Card>
  );
}

export default ExpensesList;
