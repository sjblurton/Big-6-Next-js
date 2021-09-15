import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import { Wrapper } from "./styles";

const BarChart = ({ reps, level }) => {
  let labels = [];
  if (Array.isArray(reps)) {
    labels = reps.map((set, i) => `Set ${i + 1}`);
  }

  defaults.color = "#fff";
  defaults.borderColor = "#2B3953";

  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y",
        data: reps,
        backgroundColor: ["#f5af19"],
        borderColor: ["#f5af19"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Current Level ${level}`,
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
      <Bar data={data} options={options} />
    </Wrapper>
  );
};

export default BarChart;
