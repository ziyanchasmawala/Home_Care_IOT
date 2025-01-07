import React, { useState, useEffect } from "react";
import Card from "./GraphCard";

const Graph = () => {
  const [selectedDot, setSelectedDot] = useState(0);

  const graphData = [
    {
      title: "Temperature",
      type: "bar",
      data: [
        { year: 2010, count: 15 },
        { year: 2011, count: 28 },
        { year: 2012, count: 35 },
        { year: 2013, count: 55 },
        { year: 2014, count: 7 },
        { year: 2015, count: 39 },
        { year: 2016, count: 8 },
      ],
    },
    {
      title: "Humidity",
      type: "line",
      data: [
        { year: 2010, count: 15 },
        { year: 2011, count: 18 },
        { year: 2012, count: 12 },
        { year: 2013, count: 20 },
        { year: 2014, count: 27 },
        { year: 2015, count: 35 },
        { year: 2016, count: 30 },
      ],
    },
    {
      title: "Sound",
      type: "scatter",
      data: [
        { year: 2010, count: 10 },
        { year: 2011, count: 15 },
        { year: 2012, count: 20 },
        { year: 2013, count: 25 },
        { year: 2014, count: 30 },
        { year: 2015, count: 28 },
        { year: 2016, count: 22 },
      ],
    },
    {
      title: "Motion",
      type: "line",
      fill: true,
      data: [
        { year: 2010, count: 5 },
        { year: 2011, count: 12 },
        { year: 2012, count: 17 },
        { year: 2013, count: 18 },
        { year: 2014, count: 22 },
        { year: 2015, count: 27 },
        { year: 2016, count: 30 },
      ],
    },
  ];

  useEffect(() => {
    // Automatically change graphs every 5 seconds
    const intervalId = setInterval(() => {
      setSelectedDot((prevDot) => (prevDot + 1) % graphData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        {/* Graph Display */}
        <div className="relative w-full h-[250px]">
          {graphData.map((graph, index) => (
            <Card
              key={index}
              title={graph.title}
              graph={graph}
              isActive={selectedDot === index}
            />
          ))}
        </div>

        {/* Dots for navigation */}
        <div className="mt-2 flex justify-center items-center space-x-2">
          {graphData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full ${
                selectedDot === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graph;
