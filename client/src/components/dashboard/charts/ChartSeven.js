import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartSeven = () => {
  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    fill: {
      opacity: 0.5,
      colors: [
        'rgba(63, 81, 181, 0.5)',
        'rgba(77, 182, 172, 0.5)',
        'rgba(66, 133, 244, 0.5)',
        'rgba(156, 39, 176, 0.5)',
        'rgba(233, 30, 99, 0.5)',
        'rgba(66, 73, 244, 0.4)',
        'rgba(66, 133, 244, 0.2)',
      ],
    },
    markers: {
      size: 4,
    },
    polar: {
      size: 140,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const chartSeries = [
    {
      name: 'Traffic',
      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
    },
  ];

  return (
    <div className="mx-auto w-3/5 overflow-hidden">
      <ReactApexChart options={chartOptions} series={chartSeries} type="polarArea" height={350} />
    </div>
  );
};

export default ChartSeven;
