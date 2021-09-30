import React from "react";
import { Line, defaults } from "react-chartjs-2";
import { format } from "date-fns";
import { Wrapper } from "./styles";

const LineChart = ({ repsArray }) => {
  const { labels, reps, lastLevel } = repsArray;
  const readableDates = labels
    .map((date) => format(new Date(date), "do MMM"))
    .reverse();
  const repsPerDay = reps
    .map((reps) => reps.reduce((acc, num) => acc + num, 0))
    .reverse();

  defaults.color = "#fff";
  defaults.borderColor = "#2B3953";
  const data = {
    labels: readableDates,
    datasets: [
      {
        axis: "y",
        data: repsPerDay,
        fill: false,
        backgroundColor: ["#f5af19"],
        borderColor: ["#f5af19"],
        borderWidth: 3,
        xAxisID: "Week",
        yAxisID: "Reps",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: `Current Level ${lastLevel}`,
        font: {
          size: 14,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <Wrapper>
      <Line data={data} options={options} />
    </Wrapper>
  );
};

export default LineChart;
