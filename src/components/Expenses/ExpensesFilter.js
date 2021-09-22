import React, { useState } from "react";
import "./ExpensesFilter.css";
export default function ExpensesFilter(props) {
  const [selected, setSelected] = useState("2022");
  const handleChange = (event) => {
    props.currentSelected(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
