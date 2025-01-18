import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

const Stocks = () => {
  const { stockName } = useParams(); // Get the stock name from the URL
  console.log(stockName);

  const [chartData, setChartData] = useState(null);

  // Sample stock data for candlestick chart
  const stockData = {
    tesla: {
      candleChartData: {
        series: [
          {
            name: "Price Movement",
            data: [
              { x: new Date("2022-01-01"), y: [67.52, 68.45, 66.98, 67.18] },
              { x: new Date("2022-01-02"), y: [67.3, 68.8, 67.2, 68.15] },
            ],
          },
        ],
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "Tesla Stock Candle Chart",
          align: "center",
        },
        xaxis: {
          type: "datetime",
        },
      },
    },
    google: {
      candleChartData: {
        series: [
          {
            name: "Price Movement",
            data: [
              { x: new Date("2022-01-01"), y: [1200, 1210, 1190, 1205] },
              { x: new Date("2022-01-02"), y: [1205, 1220, 1195, 1215] },
            ],
          },
        ],
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "Google Stock Candle Chart",
          align: "center",
        },
        xaxis: {
          type: "datetime",
        },
      },
    },
  };

  useEffect(() => {
    // Set the chart data based on the stockName param
    if (stockData[stockName]) {
      setChartData(stockData[stockName].candleChartData);
    }
  }, [stockName]);

  if (!chartData) {
    return <div>Stock data not available!</div>;
  }

  return (
    <div>
      <h1>{stockName.toUpperCase()} Stock Chart</h1>
      <div id="candlestick-chart">
        <ReactApexChart
          options={chartData.chart}
          series={chartData.series}
          type="candlestick"
          height={350}
        />
      </div>
    </div>
  );
};

export default Stocks;
