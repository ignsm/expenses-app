import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const today = (new Date()).toISOString().substring(0, 10);

  const defaultUserInput = {
    enteredTitle: "",
    enteredAmount: 0.99,
    enteredDate: today,
  };

  const [userInput, setUserInput] = useState(defaultUserInput);

  const titleChangeHandler = (e) => {
    const newTitle = e.target.value;
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: newTitle };
    });
  };

  const amountChangeHandler = (e) => {
    const newAmount = e.target.value;
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: newAmount };
    });
  };

  const dateChangeHandler = (e) => {
    const newDate = e.target.value;
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: newDate };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const title = userInput.enteredTitle;
    const amount = parseFloat(userInput.enteredAmount);
    const date = new Date(userInput.enteredDate);

    if (!title) {
      alert("Please, add title!");
      return;
    }

    props.onFormSubmit({ title, amount, date });
    setUserInput(defaultUserInput);
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2020-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
