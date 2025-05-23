import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ weight, fatWeight, muscleWeight }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (weight && fatWeight && muscleWeight) {
      const data = {
        datasets: [
          {
            label: "%",
            data: [weight, muscleWeight, fatWeight],
            backgroundColor: ["#fc732f", "rgb(54, 162, 235)", "rgb(255, 206, 86)"],
            borderColor: ["#fc732f", "rgb(54, 162, 235)", "rgb(255, 206, 86)"],
          },
        ],
        labels: ["الجسم", "نسبة العضلات", "نسبة الدهون"],
      };
      setChartData(data);
    }
  }, [weight, fatWeight, muscleWeight]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "50%", // Controls the center hole size
  };

  // Custom plugin with hardcoded number in the center
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.save();

      // Draw "75" (larger)
      ctx.font = `${height / 7}px Arial`; // Large font for number
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      //ctx.fillText(`${weight} كجم`, width / 2 - 10, height / 2);

      ctx.restore();
    },
  };

  if (!chartData) {
    return <div>Loading...</div>; // Display a loading message while waiting for the data to be fetched
  }

  return (
    <div style={{ width: "100%", height: "250px" }}>
      <Doughnut data={chartData} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
