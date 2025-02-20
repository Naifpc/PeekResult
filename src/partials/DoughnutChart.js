import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: "%",
        data: [70, 14, 16],
        backgroundColor: ["#fc732f", "rgb(54, 162, 235)", "rgb(255, 206, 86)"],
        borderColor: ["#fc732f", "rgb(54, 162, 235)", "rgb(255, 206, 86)"],
      },
    ],
    labels: ["الجسم", "نسبة العضلات", "نسبة الدهون"],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
		display: false,
      },
    },
    cutout: "80%", // Controls the center hole size
  };

  // ✅ Custom plugin with hardcoded number in the center
  const centerTextPlugin = {
	id: "centerText",
	beforeDraw: (chart) => {
	  const { width, height, ctx } = chart;
	  ctx.save();
  
	  // Draw "75" (larger)
	  ctx.font = `${height / 5}px Arial`; // Large font for number
	  ctx.fillStyle = "#FFFFFF"; 
	  ctx.textAlign = "center";
	  ctx.textBaseline = "middle";
	  ctx.fillText("75 كجم", width / 2 - 10, height / 2);


  
	  ctx.restore();
	},
  };
  

  return (
    <div style={{ width: "100%", height: "280px" }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
