import "./ResultBox.css";

function Link_list({ sortResult, longResult }) {
  // const [inertialData, setNewData] = useState([data]);
  // setNewData(...inertialData, {
  //   input: { sortResult },
  //   output: { longResult },
  // });
  const data = [
    {
      input: "http://localhost",
      output: "short cut",
      key: 1,
    },
  ];
  const copyData = function () {
    console.log("clicked");
    navigator.clipboard.writeText(sortResult);
  };
  return (
    <div className="Link-container">
      <p>{longResult}</p>
      <div className="Link_result">
        <p id="link">{sortResult}</p>
        <button className="Link_copy__button" onClick={copyData}>
          COPY
        </button>
      </div>
    </div>
  );
}
export default Link_list;
