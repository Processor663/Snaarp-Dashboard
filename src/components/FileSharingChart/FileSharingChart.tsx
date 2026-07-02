import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const option: EChartsOption = {
  animationDuration: 900,

  color: ["#2E36FF", "#4657FF", "#6678FF"],

  grid: {
    left: 55,
    right: 30,
    top: 30,
    bottom: 90,
    containLabel: false,
  },

  legend: {
    bottom: 20,
    left: "center",
    itemWidth: 16,
    itemHeight: 16,
    icon: "roundRect",
    itemGap: 40,
    textStyle: {
      fontSize: 15,
      color: "#444",
      fontWeight: 500,
    },
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      shadowStyle: {
        color: "rgba(0,0,0,0)",
      },
    },

    backgroundColor: "rgba(175,175,175,.95)",
    borderWidth: 0,
    borderRadius: 18,
    padding: 18,

    textStyle: {
      color: "#fff",
      fontSize: 16,
    },
  },

  xAxis: {
    type: "category",
    data: months,

    axisLine: {
      show: false,
    },

    axisTick: {
      show: false,
    },

    axisLabel: {
      margin: 20,
      color: "#666",
      fontWeight: 500,
      fontSize: 15,
    },
  },

  yAxis: {
    type: "value",

    min: 0,
    max: 100,
    interval: 10,

    axisLine: {
      show: false,
    },

    axisTick: {
      show: false,
    },

    axisLabel: {
      color: "#777",
      fontSize: 14,
      margin: 18,
    },

    splitLine: {
      lineStyle: {
        color: "#ECECEC",
        width: 2,
        type: "dashed",
      },
    },
  },

  series: [
    {
      name: "Public",
      type: "bar",

      data: [25, 35, 35, 25, 45, 80, 32, 35, 25, 22, 30, 18],

      barWidth: 18,

      barGap: "-18%",

      itemStyle: {
        borderRadius: 100,

        shadowBlur: 10,
        shadowColor: "rgba(55,70,255,.15)",

        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,

          colorStops: [
            {
              offset: 0,
              color: "#1D29F5",
            },
            {
              offset: 1,
              color: "#4958FF",
            },
          ],
        },
      },
    },

    {
      name: "Anyone with link",

      type: "bar",

      data: [45, 62, 48, 45, 70, 55, 63, 48, 45, 48, 67, 48],

      barWidth: 18,

      barGap: "-18%",

      itemStyle: {
        borderRadius: 100,

        shadowBlur: 10,

        shadowColor: "rgba(55,70,255,.15)",

        color: {
          type: "linear",

          x: 0,

          y: 0,

          x2: 0,

          y2: 1,

          colorStops: [
            {
              offset: 0,
              color: "#3548FF",
            },
            {
              offset: 1,
              color: "#6878FF",
            },
          ],
        },
      },
    },

    {
      name: "Within Organisation",

      type: "bar",

      data: [45, 22, 28, 45, 28, 45, 55, 22, 45, 22, 43, 22],

      barWidth: 18,

      itemStyle: {
        borderRadius: 100,

        shadowBlur: 10,

        shadowColor: "rgba(55,70,255,.15)",

        color: {
          type: "linear",

          x: 0,

          y: 0,

          x2: 0,

          y2: 1,

          colorStops: [
            {
              offset: 0,
              color: "#5E73FF",
            },
            {
              offset: 1,
              color: "#8D9EFF",
            },
          ],
        },
      },
    },
  ],
};

export default function FileSharingChart() {
  return (
    <ReactECharts
      option={option}
      style={{
        width: "100%",
        height: 420,
      }}
      opts={{
        renderer: "svg",
      }}
    />
  );
}