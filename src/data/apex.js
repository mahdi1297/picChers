export const Currentlysale = {
  series: [
    {
      name: "series1",
      data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0],
    },
    {
      name: "series2",
      data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0],
    },
  ],
  options: {
    chart: {
      height: 240,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
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
        "Jan",
      ],
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    markers: {
      strokeWidth: 3,
      colors: "#ffffff",
      strokeColors: ["red", "#E91E63", "#9C27B0"],
      hover: {
        size: 6,
      },
    },
    yaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -15,
        top: -40,
      },
    },
    colors: ["#C490E4", "#E91E63", "#9C27B0"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100],
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        format: "MM",
      },
    },
  },
};
