import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartFour = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [
          8, 12, 15, 11, 10, 0, 0, 10, 12, 11, 14, 10, 0, 0, 11, 12, 10, 13, 9,
          0, 0, 14, 10, 9, 13, 11, 0, 0, 13, 9,
        ],
      },
    ],
  });

  const options = {
    colors: ["#F87171"], // Updated color
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5, // Increased border radius
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false, // Removed legend
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };

  return (
    <div className="col-span-12 rounded-md bg-white px-5 pt-7.5 pb-5 shadow-md dark:bg-boxdark sm:px-7.5">
      <div>
        <div>
          <div className="w-full">
            <p className="font-semibold text-primary py-4">Total work hours</p>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
