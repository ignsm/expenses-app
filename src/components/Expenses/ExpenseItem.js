import { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [expenseTitle] = useState(props.expenseDetails.title);

  const expenseDate = props.expenseDetails.date;
  const expensePrice = props.expenseDetails.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
