// import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const selectedYear = props.selectedYear;
  // const [filterByYear, setFilterByYear] = useState(selectedYear);

  const updateYearFilter = (e) => {
    const selectedYear = e.target.value;
    props.onChangeYearFilter(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={updateYearFilter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
