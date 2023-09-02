import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const gradientColors = {
  productivity: {
    type: "vertical",
    gradientStops: [
      {
        offset: 0,
        color: "#6C00FF", // Purple
      },
      {
        offset: 50,
        color: "#3C50E0", // Blue
      },
    ],
  },
  efficiency: {
    type: "vertical",
    gradientStops: [
      {
        offset: 0,
        color: "#FF6F91", // Pink
      },
      {
        offset: 50,
        color: "#FF3C80", // Red
      },
    ],
  },
};

const options = {
  legend: {
    show: false,
  },
  chart: {
    fontFamily: "Arial, sans-serif",
    height: 335,
    type: "area",
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: "easein",
      speed: 800,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "smooth",
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
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
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Productivity",
        data: [65, 75, 80, 70, 85, 90, 75, 80, 85, 90, 80, 75],
      },
      {
        name: "Efficiency",
        data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 85, 80, 75],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-lg shadow-xl border border-stroke bg-white px-5 pt-7.5 pb-5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8" >
      <div className="flex flex-wrap mt-4 items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold text-primary text-2xl">
                Productivity and Efficiency
              </p>
              <p className="text-sm font-medium">Performance</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-white shadow-card hover:bg-purple-500 hover:shadow-card">
              Day
            </button>
            <button className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-white hover:bg-purple-500 hover:shadow-card">
              Week
            </button>
            <button className="rounded bg-blue-500 py-1 px-3 mx-2 text-xs font-medium text-white hover:bg-purple-500 hover:shadow-card">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
