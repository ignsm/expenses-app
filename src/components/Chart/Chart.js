import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint}
            maxValue={null}
            label={dataPoint.label}
            key={dataPoint.id}
          />
        );
      })}
    </div>
  );
};

export default Chart;
