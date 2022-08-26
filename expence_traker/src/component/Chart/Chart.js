import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const dataPointValue = props.dataPoints.map((data) => data.value);
  const totalMax = Math.max(...dataPointValue);
  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          max={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
