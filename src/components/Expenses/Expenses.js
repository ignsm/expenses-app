import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
