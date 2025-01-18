import React from "react";
import ApexCharts from "react-apexcharts";

const LineGraph = () => {
  const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const options = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    title: {
      text: "Monthly Sales Data",
      align: "center",
    },
  };

  return (
    <div>
      <h1>Line Graph with ApexCharts</h1>
      <ApexCharts options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineGraph;
