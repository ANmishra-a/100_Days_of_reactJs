import "./Filter.css";
function ExpenseFilter(props) {
  const filterChangeHandler = function (event) {
    props.onchangeFilter(event.target.value);
  };
  return (
    <div>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by Year</label>
          <select value={props.selected} onChange={filterChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default ExpenseFilter;
