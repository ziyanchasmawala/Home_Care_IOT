import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Card = ({ title, graph, isActive }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!isActive) return; // Only render chart when the card is active

    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: graph.type,
      data: {
        labels: graph.data.map((row) => row.year),
        datasets: [
          {
            label: "",
            data: graph.data.map((row) => row.count),
            backgroundColor:
              graph.type === "scatter"
                ? "rgba(75, 192, 192, 0.6)"
                : "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            fill: graph.fill || false,
            pointRadius: graph.type === "scatter" ? 5 : 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false, // Disable animation
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [graph, isActive]);

  return (
    <div className={`h-[200px] w-full ${isActive ? "" : "hidden"}`}>
      <div className="text-xl font-bold mb-2">{title}</div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Card;
