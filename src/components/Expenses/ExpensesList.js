import { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesList(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  const [filterByYear, setFilterByYear] = useState(2021);

  const filterChangeHandler = (year) => {
    setFilterByYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterByYear} onChangeYearFilter={filterChangeHandler} />
      {expenses.map((expenseItem) => (
        <ExpenseItem expenseDetails={expenseItem} key={expenseItem.id} />
      ))}
    </Card>
  );
}

export default ExpensesList;
