import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false,
  // responsive: true,
  plugins: {
    legend: {
      //   position: "top" as const,
      display: false,
    },
  },
};

interface DataChartProps {
  colors?: string[];
  optionValue?: string[];
  datas?: number[];
}

export function DataChart({ colors, optionValue, datas }: DataChartProps) {
  const data = {
    labels: optionValue,
    datasets: [
      {
        data: datas,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={options} width="300px" height="300px" />;
}
