import React from "react";
import ReactApexChart from "react-apexcharts";

const RadarChart = () => {
  const radarOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
      },
    },
    labels: ["Design", "Usability", "Functionality", "Performance", "Security", "Accessibility"],
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    colors: ["#2E8B57"],
    markers: {
      size: 4,
      colors: ["#2E8B57"],
      strokeColor: "#fff",
      strokeWidth: 2,
    },
    dataLabels: {
      style: {
        colors: ["#666"],
      },
    },
    yaxis: {
      tickAmount: 6,
      labels: {
        formatter: (val, i) => {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#e9e9e9",
    },
  };

  const radarSeries = [
    {
      name: "Project Score",
      data: [85, 70, 75, 90, 80, 85],
    },
  ];

  return (
    <div className="flex justify-left items-center pt-8 ">
      <div className="w-full max-w-3xl p-8 bg-white  border border-stroke rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-center">Project Evaluation Radar Chart</h2>
        <div className="w-full">
          <ReactApexChart
            options={radarOptions}
            series={radarSeries}
            type="radar"
            height={400} // Increase the height to make the chart bigger
          />
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
